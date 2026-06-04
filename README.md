# Hanvanta: Distributed Agentic Memory System

## Golden Workspace

Start from `00_GOLDEN_WORKSPACE/` for the arranged workspace view. It groups internal projects, customer projects, shared modules, skills, data, docs, automation tools, archives, and cleanup notes without breaking the existing project paths.

Welcome to the Golden Setup. This environment is designed to sync agentic state across all your devices using the MAGMA (Multi-Graph Agentic Memory Architecture).

## Directory Map

### 📂 [Hub](file:///C:/Hanvanta/Hub)
The primary sync point (mapped to Google Drive / Cloudflare R2).
- **[Memory/Inbox](file:///C:/Hanvanta/Hub/Memory/Inbox)**: Raw `.jsonl` parallel logs from all agents.
- **[Memory/Processed](file:///C:/Hanvanta/Hub/Memory/Processed)**: Semantic Markdown summaries organized by **Project > Agent > Date**.

### 📂 [Data/Indexes](file:///C:/Hanvanta/Data/Indexes)
High-performance retrieval databases (Not synced to cloud to avoid corruption).
- **QMD**: BM25 Full-text search (Rust-speed).
- **LanceDB**: Vector search for semantic similarity.
- **Kùzu**: Graph database for cross-project entity mapping.

### 📂 [Modules/memory](file:///C:/Hanvanta/Modules/memory)
The engine logic.
- `inbox_writer.py`: The universal logger.
- `extractor.py`: Converts raw logs to structured Markdown/Graph episodes.
- `organize_processed.py`: Maintains the human-readable directory tree.

## Usage
1. **Adding New Logs**: Any script can write a JSONL to the `Inbox`.
2. **Retrieval**: Use the MAGMA retrieval script (next phase) to query across all local and cloud memories.
3. **Multi-PC Setup**: Run `bootstrap.ps1` on a new machine to initialize the Junction Links.

---
*Created by Antigravity Memory Expert*
