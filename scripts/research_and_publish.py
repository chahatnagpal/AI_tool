#!/usr/bin/env python3
"""
ToolNest AI - Autonomous Research & Verification Pipeline
Discovers, verifies, and publishes new AI and utility tools twice daily (09:00 PKT & 18:00 PKT).
"""

import os
import sys
import json
import re
import urllib.request
import urllib.error
from datetime import datetime, timezone, timedelta

# Pakistan Standard Time (PKT) = UTC + 5 hours
PKT_OFFSET = timedelta(hours=5)
PKT_TIMEZONE = timezone(PKT_OFFSET, name="PKT")

ALLOWED_CATEGORIES = ["Writing", "Developer", "SEO", "Business", "Image", "Video", "PDF"]

# Curated fallback queue of verified cutting-edge utility & AI tools
CURATED_RESERVE_TOOLS = [
    {
        "id": "regex-architect",
        "name": "AI Regex & Pattern Architect",
        "category": "Developer",
        "iconClass": "icon-dev",
        "icon": '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>',
        "desc": "Translate complex string matching intent into zero-backtracking regular expressions with automated test cases.",
        "status": "coming-soon",
        "statusLabel": "New Discovery",
        "popular": False,
        "features": ["Zero-Backtracking", "Test Suite Generator", "Regex Explainer"],
        "modalId": "modal-preview"
    },
    {
        "id": "git-synthesizer",
        "name": "AI Git Commit & Changelog Synthesizer",
        "category": "Developer",
        "iconClass": "icon-dev",
        "icon": '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7M6 9v12"/></svg>',
        "desc": "Inspect staged git diffs to generate semantic Conventional Commits, breaking change notes, and release summaries.",
        "status": "coming-soon",
        "statusLabel": "New Discovery",
        "popular": False,
        "features": ["Conventional Commits", "Diff Breakdown", "Release Notes"],
        "modalId": "modal-preview"
    },
    {
        "id": "api-contract-validator",
        "name": "AI OpenAPI & Contract Validator",
        "category": "Developer",
        "iconClass": "icon-dev",
        "icon": '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
        "desc": "Audit REST, GraphQL, and gRPC endpoint contracts for breaking backward-compatibility and security vulnerabilities.",
        "status": "coming-soon",
        "statusLabel": "New Discovery",
        "popular": False,
        "features": ["Breaking Change Check", "Schema Drift Audit", "Mock Server"],
        "modalId": "modal-preview"
    },
    {
        "id": "voice-transcriber-wasm",
        "name": "AI Client-Side Voice Transcriber",
        "category": "Video",
        "iconClass": "icon-video",
        "icon": '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>',
        "desc": "Zero-server, 100% in-browser WebAssembly audio transcription and speaker separation with local privacy.",
        "status": "coming-soon",
        "statusLabel": "New Discovery",
        "popular": False,
        "features": ["100% Client-Side", "Multi-Speaker Diarization", "SRT/VTT Export"],
        "modalId": "modal-preview"
    },
    {
        "id": "svg-vector-optimizer",
        "name": "AI SVG Vectorizer & Path Optimizer",
        "category": "Image",
        "iconClass": "icon-image",
        "icon": '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
        "desc": "Convert raster logos and UI sketches into production-ready SVGs with reduced Bezier control points and minified code.",
        "status": "coming-soon",
        "statusLabel": "New Discovery",
        "popular": False,
        "features": ["Bezier Simplification", "Asset Minifier", "React/JSX Component"],
        "modalId": "modal-preview"
    }
]

def get_current_times():
    utc_now = datetime.now(timezone.utc)
    pkt_now = utc_now.astimezone(PKT_TIMEZONE)
    return utc_now, pkt_now

def load_catalog(filepath="data/tools.json"):
    if not os.path.exists(filepath):
        print(f"[-] Catalog file not found at {filepath}")
        return {"version": "2.4.0", "tools": []}
    with open(filepath, "r", encoding="utf-8") as f:
        return json.load(f)

def save_catalog(data, filepath="data/tools.json"):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"[+] Saved updated catalog with {len(data['tools'])} tools to {filepath}")

def query_gemini(api_key, existing_ids):
    """Query Google Gemini API for newly researched tools."""
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
    
    prompt = f"""You are an elite autonomous AI Tools Researcher for ToolNest AI.
We are looking for 1 to 2 brand-new, trending, highly practical AI or developer utility tools.
Currently, our catalog already contains these tool IDs: {existing_ids}.
DO NOT repeat any of these IDs or tools.

Target Categories: Writing, Developer, SEO, Business, Image, Video, PDF.

Return ONLY a valid JSON array of 1 or 2 tool objects conforming strictly to this format:
[
  {{
    "id": "kebab-case-unique-slug",
    "name": "Crisp Tool Name",
    "category": "Developer",
    "iconClass": "icon-dev",
    "icon": "<svg width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/></svg>",
    "desc": "1-2 sentence description explaining the concrete utility and benefit.",
    "status": "coming-soon",
    "statusLabel": "New Discovery",
    "popular": false,
    "features": ["Feature 1", "Feature 2", "Feature 3"],
    "modalId": "modal-preview"
  }}
]
Ensure the response is ONLY pure JSON with no markdown backticks, no conversational text."""

    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "temperature": 0.4,
            "maxOutputTokens": 1024
        }
    }

    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"}
    )

    try:
        with urllib.request.urlopen(req, timeout=25) as response:
            result = json.loads(response.read().decode("utf-8"))
            candidate_text = result["candidates"][0]["content"]["parts"][0]["text"].strip()
            # Clean markdown formatting if present
            candidate_text = re.sub(r"^```json\s*", "", candidate_text)
            candidate_text = re.sub(r"^```\s*", "", candidate_text)
            candidate_text = re.sub(r"\s*```$", "", candidate_text)
            return json.loads(candidate_text)
    except Exception as e:
        print(f"[!] Gemini API query failed: {e}")
        return None

def verify_tool(tool, existing_ids, existing_names):
    """
    Automated verification gate:
    1. Schema validation (required keys)
    2. Data types and length sanity
    3. Category validity
    4. Duplication check
    5. SVG icon integrity
    """
    required_keys = ["id", "name", "category", "desc", "features", "icon", "status"]
    for k in required_keys:
        if k not in tool or not tool[k]:
            return False, f"Missing or empty required field '{k}'"

    # Category validation
    if tool["category"] not in ALLOWED_CATEGORIES:
        return False, f"Invalid category '{tool['category']}'. Must be one of {ALLOWED_CATEGORIES}"

    # Name validation
    name = tool["name"].strip()
    if len(name) < 3 or len(name) > 65:
        return False, f"Tool name length invalid ({len(name)} chars)"
    if name.lower() in existing_names:
        return False, f"Tool name '{name}' already exists in catalog"

    # ID validation
    tool_id = tool["id"].strip().lower()
    if not re.match(r"^[a-z0-9-]+$", tool_id):
        return False, f"Tool ID '{tool_id}' must be alphanumeric with hyphens"
    if tool_id in existing_ids:
        return False, f"Tool ID '{tool_id}' already exists in catalog"

    # Description validation
    desc = tool["desc"].strip()
    if len(desc) < 20 or len(desc) > 240:
        return False, f"Description length invalid ({len(desc)} chars)"

    # Features validation
    features = tool.get("features", [])
    if not isinstance(features, list) or len(features) < 2:
        return False, "Features must be a list with at least 2 items"

    # Icon validation
    icon = tool.get("icon", "")
    if "<svg" not in icon or "</svg>" not in icon:
        return False, "Icon must be a valid SVG string"

    return True, "Passed all verification criteria"

def update_app_js(catalog_tools, filepath="app.js"):
    """Sync newly discovered tools into app.js so index.html displays them immediately."""
    if not os.path.exists(filepath):
        print(f"[-] app.js not found at {filepath}")
        return
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Format tools as JavaScript array
    tools_js = json.dumps(catalog_tools, indent=2, ensure_ascii=False)
    
    # Replace the TOOLS_DATA block
    pattern = r"const TOOLS_DATA = \[[\s\S]*?\n\];"
    replacement = f"const TOOLS_DATA = {tools_js};"
    
    if re.search(pattern, content):
        new_content = re.sub(pattern, replacement, content, count=1)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"[+] Synced {len(catalog_tools)} tools into {filepath}")
    else:
        print("[!] Warning: Could not locate const TOOLS_DATA block in app.js")

def main():
    utc_now, pkt_now = get_current_times()
    print("=" * 65)
    print(" ToolNest AI Autonomous Research & Verification Pipeline")
    print(f" Execution Time: {pkt_now.strftime('%Y-%m-%d %I:%M:%S %p')} PKT ({utc_now.strftime('%H:%M:%S')} UTC)")
    print("=" * 65)

    catalog_data = load_catalog()
    tools = catalog_data.get("tools", [])
    existing_ids = {t["id"] for t in tools}
    existing_names = {t["name"].strip().lower() for t in tools}

    print(f"[*] Current Catalog Count: {len(tools)} tools")

    # Step 1: Research Candidates
    api_key = os.getenv("GEMINI_API_KEY", "").strip()
    candidates = []

    if api_key and not api_key.startswith("<"):
        print("[*] Contacting Google Gemini Research Agent...")
        raw_candidates = query_gemini(api_key, list(existing_ids))
        if raw_candidates and isinstance(raw_candidates, list):
            candidates = raw_candidates
            print(f"[+] Gemini generated {len(candidates)} candidate tools.")

    if not candidates:
        print("[*] Utilizing verified research queue...")
        for reserve_tool in CURATED_RESERVE_TOOLS:
            if reserve_tool["id"] not in existing_ids and reserve_tool["name"].lower() not in existing_names:
                candidates.append(reserve_tool)
                if len(candidates) >= 1:
                    break

    # Step 2: Verification Gate
    print("\n" + "-" * 40)
    print(" Verification & Quality Assurance Gate")
    print("-" * 40)

    verified_tools = []
    verification_log = []

    for cand in candidates:
        passed, reason = verify_tool(cand, existing_ids, existing_names)
        cand_name = cand.get("name", "Unknown")
        cand_id = cand.get("id", "unknown")
        
        log_entry = {
            "id": cand_id,
            "name": cand_name,
            "verified": passed,
            "reason": reason,
            "timestamp": pkt_now.isoformat()
        }
        verification_log.append(log_entry)

        if passed:
            print(f"  [✓ PASS] {cand_name} ({cand_id}) - {reason}")
            # Ensure safe fields
            cand["status"] = "coming-soon"
            cand["statusLabel"] = "New Discovery"
            cand["modalId"] = "modal-preview"
            cand["discoveredAt"] = pkt_now.strftime("%Y-%m-%d %I:%M %p PKT")
            verified_tools.append(cand)
            existing_ids.add(cand_id)
            existing_names.add(cand_name.lower())
        else:
            print(f"  [✗ FAIL] {cand_name} ({cand_id}) - {reason}")

    # Step 3: Publishing
    print("\n" + "-" * 40)
    print(" Publishing & Deployment")
    print("-" * 40)

    if not verified_tools:
        print("[*] No new verified tools to publish during this run. Catalog is fully up to date.")
        status = "NO_CHANGE"
    else:
        for vt in verified_tools:
            tools.append(vt)
            print(f"  [PUBLISHED] '{vt['name']}' in category '{vt['category']}'")

        catalog_data["tools"] = tools
        catalog_data["lastUpdated"] = pkt_now.isoformat()
        catalog_data["totalTools"] = len(tools)
        save_catalog(catalog_data)
        update_app_js(tools)
        status = "PUBLISHED"

    # Write research log
    log_file = "data/research_log.json"
    existing_logs = []
    if os.path.exists(log_file):
        try:
            with open(log_file, "r", encoding="utf-8") as f:
                existing_logs = json.load(f)
        except Exception:
            existing_logs = []

    run_record = {
        "execution_utc": utc_now.isoformat(),
        "execution_pkt": pkt_now.strftime("%Y-%m-%d %I:%M:%S %p PKT"),
        "status": status,
        "tools_discovered": len(candidates),
        "tools_verified": len(verified_tools),
        "newly_published": [t["name"] for t in verified_tools],
        "total_catalog_size": len(tools),
        "verification_details": verification_log
    }
    existing_logs.insert(0, run_record)
    existing_logs = existing_logs[:50]  # Keep latest 50 runs

    with open(log_file, "w", encoding="utf-8") as f:
        json.dump(existing_logs, f, indent=2)

    print(f"\n[+] Research log updated at {log_file}")
    print(f"[+] Pipeline completed successfully at {pkt_now.strftime('%I:%M:%S %p')} PKT")
    print("=" * 65)

if __name__ == "__main__":
    main()
