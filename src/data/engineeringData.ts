import type { DataStructureSpec, ProjectSlug } from '../types/portfolio';

export interface SdlcPhase {
  id: string;
  number: string;
  title: string;
  whatIDo: string;
  evidence: string[];
  status: 'Done' | 'Partly' | 'Planned';
  gap?: string;
  caseStudy?: ProjectSlug;
}

export const SDLC_PHASES: readonly SdlcPhase[] = [
  {
    id: 'requirements',
    number: '01',
    title: 'Requirements & Planning',
    whatIDo: 'Turn a problem into written requirements, constraints and milestones before writing code.',
    evidence: [
      'Multi-workstream schedules and critical-path mapping in Microsoft Project (MEC Tech)',
      'A written problem and pain-point section in every case study',
    ],
    status: 'Done',
  },
  {
    id: 'design',
    number: '02',
    title: 'System Design',
    whatIDo: 'Choose an architecture that fits the problem, and record the decision, the trade-offs and what I rejected.',
    evidence: [
      'ADR-01: static delivery vs microservices (see Systems & DSA)',
      'Service diagrams with ports and protocols in the DataLens and RoadVision case studies',
    ],
    status: 'Done',
    caseStudy: 'datalens-global',
  },
  {
    id: 'implementation',
    number: '03',
    title: 'Implementation',
    whatIDo: 'Typed, modular code with clear module boundaries and small, reviewable commits.',
    evidence: [
      'Strict TypeScript across this portfolio',
      'Spring Boot REST APIs and Core Java modules (Mphasis)',
      'FastAPI services and ONNX runtime behind RoadVision AI',
    ],
    status: 'Done',
  },
  {
    id: 'testing',
    number: '04',
    title: 'Testing',
    whatIDo: 'Unit-test the logic that matters; type-check and lint on every push.',
    evidence: [
      'Unit tests for the catalogue engine (src/lib/catalogueEngine.test.ts)',
      'Type-check and lint run in CI on every push',
    ],
    status: 'Partly',
    gap: 'Tests cover the catalogue engine only. Component tests and end-to-end tests are the next step.',
  },
  {
    id: 'cicd',
    number: '05',
    title: 'CI/CD',
    whatIDo: 'Every push to main is linted, type-checked, tested, built and deployed automatically.',
    evidence: ['GitHub Actions pipeline (lint, typecheck, test, build, deploy to GitHub Pages)'],
    status: 'Done',
  },
  {
    id: 'deployment',
    number: '06',
    title: 'Deployment',
    whatIDo: 'Static hosting for this site; containerised services for the backend projects.',
    evidence: [
      'GitHub Pages and Vercel configuration for this site',
      'Docker Compose service manifests for RoadVision and DataLens backend microservices',
    ],
    status: 'Partly',
  },
  {
    id: 'monitoring',
    number: '07',
    title: 'Monitoring',
    whatIDo: 'Know when something breaks before a user tells me.',
    evidence: [],
    status: 'Planned',
    gap: 'Not in place yet. Planned: Lighthouse CI on every push and an uptime check on the live site.',
  },
  {
    id: 'maintenance',
    number: '08',
    title: 'Maintenance',
    whatIDo: 'Keep dependencies current and changes traceable.',
    evidence: [],
    status: 'Planned',
    gap: 'Planned: Dependabot for dependency updates (switch to Done after you enable it in the repo settings).',
  },
];

// Shown in the Systems & DSA section.
export const PROJECT_ALGORITHMS: readonly DataStructureSpec[] = [
  {
    requirement: 'AETHER: repeated weather lookups',
    structure: 'LRU cache (hash map + doubly linked list)',
    typescriptSignature: 'get(lat: number, lon: number): WeatherData | undefined; put(lat: number, lon: number, data: WeatherData): void',
    complexity: 'O(1) get, O(1) put, O(capacity) space',
    rationale: 'Constant-time lookup and eviction with no scanning, so recent queries never trigger a second API call.',
  },
  {
    requirement: 'RoadVision AI: merging detections from two models',
    structure: 'Weighted Boxes Fusion (WBF) ensemble',
    typescriptSignature: 'weighted_boxes_fusion(boxes_list: BoundingBox[][], scores_list: number[][], labels_list: string[][], weights: number[], iou_thr: number): DetectionResult',
    complexity: 'O(N^2) worst-case box overlap comparison, O(N) space where N is detected bounding boxes',
    rationale: 'Averages overlapping box coordinates weighted by model confidence scores, preserving multi-crack boundaries where Non-Maximum Suppression (NMS) erroneously dropped adjacent damage.',
  },
  {
    requirement: 'Rooted: matching surplus food to NGO pickups',
    structure: 'PostgreSQL GiST spatial index + B-Tree composite index',
    typescriptSignature: 'SELECT * FROM listings WHERE status = $1 AND ST_DWithin(geom, $2, $3) ORDER BY expires_at ASC',
    complexity: 'O(log N + K) index scan time, where N is active listings and K is local results',
    rationale: 'GiST indexing avoids full-table spatial scans across geographic coordinates, pairing with B-Tree indices on expiry timestamps for instant nearest-neighbor dispatch.',
  },
];
