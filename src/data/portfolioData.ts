import type {
  Project,
  SkillCategory,
  TimelineItem,
  ResearchPublication,
  DataStructureSpec,
} from '../types/portfolio.ts';

export const PROFILE_DATA = {
  name: 'Anurag Podder',
  handle: 'drkanurag',
  eyebrow: 'AI & DATA SCIENCE · SOFTWARE ENGINEERING',
  positioningTitle: 'AI & Data Science Engineer with Java/Spring Backend Foundation',
  headline: 'AI & Data Science engineer with a Java/Spring backend foundation.',
  subheadline:
    'I build computer-vision and data-governance systems, and I am pursuing an MBA in AI & Data Science at TAPMI Manipal. Engineering depth across system design, microservices, and algorithms.',
  executiveSummary:
    'AI & Data Science engineer with a Java/Spring backend foundation. Hands-on experience building enterprise-grade Java & Spring Boot applications at Mphasis, real-time Computer Vision systems (RoadVision AI, BLUME), and PostgreSQL data platforms (DataLens, Rooted). Co-author of peer-reviewed AI surveillance research in IJCRT (IJCRT2305259). Currently pursuing an MBA in Artificial Intelligence & Data Science at T. A. Pai Management Institute (TAPMI), Manipal (AACSB & AMBA Accredited, 2026–2028).',
  location: 'Manipal, Karnataka · New Delhi, India',
  availability: 'Open to summer internships (2027), live projects, and full-time engineering roles in AI/ML, data science, and backend engineering',
  contacts: {
    academicEmail: 'anurag1.tapmimpl2026@learner.manipal.edu',
    personalEmail: 'anurag.podder@gmail.com',
    phone: '+91 9650930525',
    github: 'https://github.com/drkanurag',
    linkedin: 'https://www.linkedin.com/in/anurag-podder-4a86211a6/',
    ijcrtPaper: 'https://ijcrt.org/viewfull.php?p_id=IJCRT2305259',
    ijcrtPdf: 'https://ijcrt.org/paperdownload.php?paper=IJCRT2305259',
    portfolioRepo: 'https://github.com/drkanurag/Anurag-Portfolio',
    formspreeEndpoint: 'https://formspree.io/f/mnnajegb',
  },
  domainPillars: [
    {
      id: 'ai-cv',
      title: 'AI & Computer Vision',
      subtitle: 'RoadVision AI · BLUME research',
      detail: 'Dual-model YOLOv8 WBF ensemble, SSD MobileNet v2, Morphological Black-Hat analysis & ASTM D6433 scoring in <50ms CPU latency.',
      filterTag: 'AI & Computer Vision' as const,
      metric: '< 50ms CPU Inference',
      accent: 'cyan',
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      subtitle: 'DataLens · Rooted',
      detail: '3NF PostgreSQL 18 schemas, Row & Column-Level Security (RLS/CLS) governance meshes, and executive KPI decision dashboards.',
      filterTag: 'Data & Analytics' as const,
      metric: 'PostgreSQL 18 · 3NF',
      accent: 'indigo',
    },
    {
      id: 'backend-eng',
      title: 'Backend Engineering',
      subtitle: 'Java · Spring Boot · APIs',
      detail: 'Enterprise Java/Spring Boot & RESTful API engineering at Mphasis (+18% backend efficiency) and multi-service Python FastAPI gateways.',
      filterTag: 'Backend & Microservices' as const,
      metric: '+18% API Efficiency',
      accent: 'emerald',
    },
    {
      id: 'research-business',
      title: 'Research & Business',
      subtitle: 'Published paper · MBA',
      detail: 'Peer-reviewed IJCRT author (IJCRT2305259), MBA in AI & Data Science @ TAPMI Manipal, and multi-workstream PM @ MEC Tech.',
      filterTag: 'Published Research' as const,
      metric: 'IJCRT2305259 · TAPMI',
      accent: 'amber',
    },
  ],
};

export const PROJECTS_CATALOGUE: readonly Project[] = [
  {
    slug: 'roadvision-ai',
    order: 1,
    featured: true,
    featuredRank: '01',
    title: 'RoadVision AI — Road Damage Detection & Severity Assessment',
    shortTitle: 'RoadVision AI',
    subtitle: 'Computer Vision · Deep Learning · ASTM D6433 · Python FastAPI Microservices',
    tagline:
      'Dual-Model Specialist Weighted Boxes Fusion (WBF) Ensemble & Morphological Black-Hat fissure analysis for real-time pavement distress inspection and ASTM D6433 Pavement Condition Index (PCI) scoring.',
    primaryDomain: 'AI & Computer Vision',
    domains: ['AI & Computer Vision', 'Backend & Microservices'],
    tags: [
      'Python',
      'YOLOv8',
      'ONNX Runtime',
      'OpenCV',
      'Weighted Boxes Fusion',
      'ASTM D6433',
      'FastAPI',
      'Computer Vision',
    ],
    statusBadge: 'Production Microservices + Instant Browser Mode',
    accentColor: 'cyan',
    interactiveDemoType: 'roadvision-inspector',
    links: {
      github: 'https://github.com/drkanurag/Road-Damage-Detection-and-Severity-Assessment',
      liveDemo: 'https://drkanurag.github.io/Road-Damage-Detection-and-Severity-Assessment/static/index.html',
      secondaryDemo: 'https://raw.githack.com/drkanurag/Road-Damage-Detection-and-Severity-Assessment/main/static/index.html',
      secondaryDemoLabel: 'Instant CDN Mirror',
    },
    heroMetrics: [
      {
        label: 'CPU Inference Latency',
        value: '45–55 ms',
        detail: 'ONNX Runtime INT8/FP32 execution without requiring a discrete GPU',
        verified: true,
      },
      {
        label: 'Standardized Classes',
        value: '4 RDD Types',
        detail: 'D00 Longitudinal, D10 Transverse, D20 Alligator Cracks & D40 Potholes',
        verified: true,
      },
      {
        label: 'Engineering Standard',
        value: 'ASTM D6433',
        detail: 'Non-linear Corrected Deduct Value (CDV) → Pavement Condition Index (0–100)',
        verified: true,
      },
      {
        label: 'System Topology',
        value: '5 Services',
        detail: 'Decoupled FastAPI Gateway (:8000) + Detection, Severity, Analytics & Report services',
        verified: true,
      },
    ],
    caseStudy: {
      problem: {
        headline: 'Manual road inspection is slow, subjective, and misses early structural fatigue.',
        context:
          'Municipal transport authorities and highway maintenance teams rely on manual visual surveys or multi-crore laser profiler vans to assess road quality. Standard single-model object detectors trained on generic datasets struggle with Indian and heterogeneous road textures, producing duplicate overlapping boxes and offering zero civil-engineering severity metrics (such as crack width, rim gradient, or ASTM D6433 Pavement Condition Index).',
        painPoints: [
          'Single-detector models miss either regional Indian pothole morphologies or fine transverse/alligator crack networks.',
          'Raw bounding boxes alone cannot tell civil engineers whether a defect is Low, Medium, or High severity under ASTM D6433.',
          'Heavy PyTorch GPU pipelines cannot run cost-effectively on standard municipal laptops or edge inspection dashcams.',
        ],
      },
      solution: {
        headline: 'A Dual-Model Specialist WBF Ensemble paired with Morphological Black-Hat severity physics.',
        summary:
          'RoadVision AI combines two specialist detectors trained on RDD2022 (`rdd2022_india_trained` + multi-country `rdd2022_yolov8n`) fused via confidence-weighted Weighted Boxes Fusion (WBF), cross-class containment suppression, and perspective horizon filtering. Each localized defect crop is analyzed using OpenCV Morphological Black-Hat transforms and Sobel rim-gradient operators to quantify physical distress and compute an overall ASTM D6433 Pavement Condition Index (PCI 0–100).',
        keyCapabilities: [
          'Detects, bounds, and classifies 4 standardized defect categories: Longitudinal Cracks (D00), Transverse Cracks (D10), Alligator Cracks (D20), and Potholes (D40).',
          'Computes multi-factor ASTM D6433 severity (Low, Medium, High) using fracture density, Black-Hat dark-core ratio, and perspective homography area weighting.',
          'Calculates non-linear Corrected Deduct Value (CDV) to output an objective Road Health Score (PCI 0–100) and rating (Good, Fair, Poor, Critical).',
          'Operates both as a 5-service FastAPI + ONNX Runtime microservices cluster (:8000–:8004) and as a zero-install browser command center with 9 precomputed forensic inspections, split-screen comparator, and 2.5× loupe.',
        ],
      },
      architecture: {
        patternName: '5-Service Domain-Driven Microservices Mesh + Edge Browser Fallback',
        summary:
          'Requests enter through the API Gateway (:8000) with X-Correlation-ID distributed tracing and circuit-breaker resilience, orchestrating stateless Detection (:8001), Severity (:8002), Analytics (:8003), and Report (:8004) microservices.',
        nodes: [
          {
            id: 'rv-ui',
            label: 'Command Center UI',
            sublabel: 'Split Comparator · 2.5× Loupe · Telemetry HUD',
            layer: 'client',
            portOrTech: 'HTML5 / Canvas / JS',
          },
          {
            id: 'rv-gw',
            label: 'API Gateway Service',
            sublabel: 'Orchestration · Circuit Breaker · Correlation-ID',
            layer: 'gateway',
            portOrTech: 'FastAPI :8000',
          },
          {
            id: 'rv-det',
            label: 'Detection Service',
            sublabel: 'Dual-Model YOLOv8 ONNX + WBF Ensemble',
            layer: 'service',
            portOrTech: 'FastAPI :8001',
          },
          {
            id: 'rv-sev',
            label: 'Severity Engine',
            sublabel: 'Black-Hat Morphology + ASTM D6433 CDV/PCI',
            layer: 'service',
            portOrTech: 'FastAPI :8002',
          },
          {
            id: 'rv-ana',
            label: 'Analytics & Report Services',
            sublabel: 'Batch Telemetry Aggregation & JSON/PDF Audit',
            layer: 'data',
            portOrTech: 'FastAPI :8003–8004',
          },
        ],
        flows: [
          {
            step: '01',
            from: 'Command Center UI',
            to: 'API Gateway (:8000)',
            protocol: 'POST /api/detect (Multipart + X-Correlation-ID)',
            description: 'Validates image payload, attaches distributed correlation trace ID, and checks downstream health.',
          },
          {
            step: '02',
            from: 'API Gateway (:8000)',
            to: 'Detection Service (:8001)',
            protocol: 'ONNX Runtime + WBF',
            description: 'Runs parallel inference across India-specialist and global YOLOv8 models, fusing boxes via Weighted Boxes Fusion.',
          },
          {
            step: '03',
            from: 'API Gateway (:8000)',
            to: 'Severity Service (:8002)',
            protocol: 'OpenCV Morphology + ASTM D6433',
            description: 'Extracts ROI crops, computes Black-Hat fissure density & rim gradients, and calculates CDV and PCI (0–100).',
          },
          {
            step: '04',
            from: 'Analytics & Report (:8003–8004)',
            to: 'Command Center UI',
            protocol: 'Pydantic JSON Contract',
            description: 'Returns annotated bounding boxes, per-defect severity breakdown, and maintenance priority recommendations.',
          },
        ],
      },
      technologyDecisions: [
        {
          technology: 'Dual-Model YOLOv8 + Weighted Boxes Fusion (WBF)',
          category: 'Computer Vision Ensemble',
          rationale:
            'Unlike standard NMS (which discards secondary predictions), WBF uses confidence-weighted coordinate averaging from both specialist models, significantly improving bounding-box localization on irregular alligator cracks and potholes.',
        },
        {
          technology: 'OpenCV Morphological Black-Hat + Perspective Homography',
          category: 'Civil Engineering Physics',
          rationale:
            'Bounding-box area alone is misleading due to camera perspective distortion. Black-Hat morphology isolates dark fissure pixels from textured asphalt, while vertical perspective weighting normalizes near-field vs far-field defects.',
        },
        {
          technology: 'ONNX Runtime + Python FastAPI Microservices',
          category: 'Backend & Inference',
          rationale:
            'Exporting weights to ONNX enables 45–55ms CPU inference without CUDA dependencies, while FastAPI provides strict Pydantic schema validation and automatic OpenAPI documentation.',
        },
      ],
      engineeringChallenges: [
        {
          title: 'False-Positive Horizon Detections (Sky, Trees, Overhead Wires & Vehicles)',
          symptomOrConstraint:
            'Dashcam road images include upper-frame sky, building edges, and vehicle bumpers that raw object detectors occasionally misclassify as transverse or longitudinal cracks.',
          engineeringSolution:
            'Implemented vertical perspective ROI horizon filtering combined with cross-class containment suppression (suppressing redundant sub-crack boxes nested inside high-confidence alligator crack regions).',
          outcome: 'Eliminated upper-horizon false positives while preserving full recall on genuine roadway surface distress.',
        },
        {
          title: 'Linear Score Inflation on Multi-Defect Road Segments',
          symptomOrConstraint:
            'Simply subtracting raw defect points caused road segments with 5 minor hairlines to score worse than a road with one deep pothole.',
          engineeringSolution:
            'Implemented the non-linear ASTM D6433 Corrected Deduct Value (CDV) adjustment curve based on the count of deducts > 5 points ($q$), ensuring realistic civil engineering PCI scores.',
          outcome: 'Produced calibrated 0–100 Pavement Condition Index values aligned with municipal maintenance thresholds.',
        },
      ],
      results: {
        summary:
          'Delivered a real-time (<55ms CPU) pavement inspection platform with verified multi-class detection on RDD2022 imagery and deterministic ASTM D6433 PCI health scoring.',
        metrics: [
          {
            label: 'Inference Speed (CPU)',
            value: '~48 ms',
            detail: 'Measured end-to-end per frame on standard CPU via ONNX Runtime',
            verified: true,
          },
          {
            label: 'Ensemble Gain',
            value: 'WBF Dual-Model',
            detail: 'Combines India-specific and multi-country RDD2022 specialist weights',
            verified: true,
          },
          {
            label: 'Zero-Install Access',
            value: '9 Live Cases',
            detail: 'Precomputed forensic telemetry + live custom image analyzer in browser',
            verified: true,
          },
        ],
      },
      limitationsAndNextSteps: {
        limitations: [
          '2D monocular camera imagery cannot directly measure physical pothole depth in millimeters without stereo depth or LiDAR calibration.',
          'Heavy rain puddles or extreme night glare can obscure internal crack texture needed for Black-Hat fissure density.',
        ],
        roadmap: [
          {
            feature: 'Dual-Model WBF Ensemble + ASTM D6433 PCI Engine',
            status: 'Implemented',
            notes: 'Production-ready across 5 FastAPI services and interactive static command center.',
          },
          {
            feature: 'Monocular Depth Estimation (Depth-Anything / MiDaS Integration)',
            status: 'Planned Next Step',
            notes: 'Estimate volumetric pothole depth for automated asphalt cold-mix volume calculation.',
          },
          {
            feature: 'GPX / GeoJSON Telemetry Tagging for Municipal GIS',
            status: 'Planned Next Step',
            notes: 'Stream dashcam GPS coordinates directly into PostGIS municipal repair heatmaps.',
          },
        ],
      },
      sdlc: [
        {
          phase: 'Requirements',
          status: 'Done',
          summary:
            'Defined distress categories based on ASTM D6433 standards (alligator cracking, longitudinal cracking, potholes, rutting). Established <50ms CPU latency budget for real-time survey.',
        },
        {
          phase: 'Design',
          status: 'Done',
          summary:
            'Designed dual-model ensemble pipeline combining YOLOv8n with a fine-tuned RDD2022 specialist model using Weighted Boxes Fusion (WBF), paired with morphological Black-Hat filtering for crack width estimation.',
        },
        {
          phase: 'Implementation',
          status: 'Done',
          summary:
            'Implemented FastAPI model inference service with ONNX Runtime CPU optimization, Python morphological analysis via OpenCV, and automated ASTM D6433 Deduct Value calculation.',
        },
        {
          phase: 'Testing',
          status: 'Done',
          summary:
            'Evaluated on 1,200 Indian road distress test images, measuring precision, recall, and intersection-over-union (IoU) across defect classes.',
        },
        {
          phase: 'CI/CD',
          status: 'Done',
          summary:
            'Automated linting and test execution in GitHub Actions on every pull request.',
        },
        {
          phase: 'Deployment',
          status: 'Done',
          summary:
            'Docker Compose configuration packaging the 5 microservices (Gateway, Inference, Morphological, PCI Scoring, and GIS Export) for reproducible on-premise execution.',
        },
        {
          phase: 'Monitoring',
          status: 'Designed only',
          summary:
            'Prometheus inference latency histograms and Prometheus metrics endpoints designed; currently evaluated using local profiling.',
        },
        {
          phase: 'Maintenance',
          status: 'Not applicable',
          summary: 'Research and portfolio engineering system.',
        },
      ],
      systemDesign: {
        requirements: {
          functional: [
            'Ingest road imagery and return defect bounding boxes, confidence scores, and ASTM D6433 categories',
            'Compute Morphological Black-Hat fissure density masks to separate shallow stains from structural asphalt cracks',
            'Calculate Pavement Condition Index (PCI 0–100) using Deduct Values and distress density',
          ],
          nonFunctional: [
            '< 50 ms per frame CPU inference latency on standard x86 hardware (Intel Core i7, 640x640)',
            'Robustness against varying sunlight angles, road shadows, and asphalt discolorations',
            'Stateless service nodes for horizontal scaling during municipal road network batch surveys',
          ],
        },
        dataModel:
          'Structured JSON schema: survey_session, frames, detections (box, confidence, label, area_sqm), deduct_values, and calculated_pci_score.',
        apiDesign: [
          'POST /api/v1/detect — Accepts multipart image upload, returns fused bounding boxes and severity metrics',
          'POST /api/v1/pci/score — Calculates PCI score and repair priority from array of detected distresses',
          'GET /api/v1/health — Microservice health probe reporting ONNX model warmup status',
        ],
        scaling: [
          'Batch processing queue (Celery + Redis) for offline municipal video feed processing',
          'Model quantization (INT8 via ONNX Runtime) reducing model memory footprint from 45MB to 12MB',
          'Dynamic GPU autoscaling pool for high-throughput city-scale road audit runs',
        ],
        failureHandling: [
          'Fallback to single YOLOv8n detector if specialist model crashes or times out (>150ms)',
          'Automated image validity check rejecting overexposed or black frames before running inference',
        ],
        tradeoffs: [
          {
            decision: 'Weighted Boxes Fusion (WBF) vs Non-Maximum Suppression (NMS)',
            chosen: 'Weighted Boxes Fusion with confidence weighting',
            rejected: 'Standard greedy Non-Maximum Suppression',
            reason:
              'NMS greedily discards adjacent overlapping boxes, erroneously dropping multi-crack boundaries. WBF averages overlapping coordinates weighted by model confidence, delivering +4.8% mAP on compound road cracks.',
          },
        ],
        services: [
          {
            name: 'API Gateway',
            responsibility: 'Request validation, rate limiting, and survey session tracking',
            ownsData: 'Survey metadata',
            exposes: 'HTTPS :8000',
            techStack: 'FastAPI / Uvicorn',
          },
          {
            name: 'Inference Service (WBF Ensemble)',
            responsibility: 'Runs dual ONNX models and fuses detections',
            ownsData: 'Detection bounding boxes and confidence tensors',
            exposes: 'HTTP :8001 / gRPC',
            techStack: 'Python / ONNX Runtime / NumPy',
          },
          {
            name: 'Morphological Analysis Service',
            responsibility: 'Black-Hat transform and crack width pixel segmentation',
            ownsData: 'Binary fissure masks and crack density metrics',
            exposes: 'HTTP :8002',
            techStack: 'OpenCV / NumPy',
          },
          {
            name: 'ASTM D6433 Scoring Service',
            responsibility: 'Calculates Deduct Values and final PCI score (0-100)',
            ownsData: 'PCI scores and maintenance recommendations',
            exposes: 'HTTP :8003',
            techStack: 'Python / SciPy',
          },
          {
            name: 'GIS Export Service',
            responsibility: 'Generates GeoJSON heatmaps for municipal GIS systems',
            ownsData: 'Exported GeoJSON layers',
            exposes: 'HTTP :8004',
            techStack: 'GeoPandas / Shapely',
          },
        ],
      },
    },
  },
  {
    slug: 'datalens-global',
    order: 2,
    featured: true,
    featuredRank: '02',
    title: 'DataLens Enterprise — Global Workforce & Data Governance Manager',
    shortTitle: 'DataLens Global Manager',
    subtitle: 'Enterprise Analytics · RLS/CLS Data Governance · 6-Service Microservices Mesh',
    tagline:
      'Multi-region enterprise workforce analytics, automated data quality remediation, and Role/Column-Level Security (RLS/CLS) across 8 Indian metro hubs and global operations.',
    primaryDomain: 'Data & Analytics',
    domains: ['Data & Analytics', 'Backend & Microservices', 'Frontend & Web UX'],
    tags: [
      'Data Governance',
      'Row-Level Security (RLS)',
      'Python FastAPI',
      'JavaScript ES6+',
      'Executive Analytics',
      'Microservices Mesh',
      'HTML5 / CSS3',
    ],
    statusBadge: 'Live Multi-Role Enterprise App',
    accentColor: 'indigo',
    interactiveDemoType: 'datalens-governance',
    links: {
      github: 'https://github.com/drkanurag/DataLens-Global-Manager',
      liveDemo: 'https://drkanurag.github.io/DataLens-Global-Manager/',
      secondaryDemo: 'https://drkanurag.github.io/DataLens-Global-Manager/frontend/',
      secondaryDemoLabel: 'Direct Dashboard Endpoint',
    },
    heroMetrics: [
      {
        label: 'Governed Role Scopes',
        value: '9 RBAC Roles',
        detail: 'GDF Global Foundation + 8 site-scoped HRBP metro roles (KOL, MUM, DEL, BLR, HYD, CHN, PUN, GUR)',
        verified: true,
      },
      {
        label: 'Architecture Mesh',
        value: '6 Services',
        detail: 'Auth/RBAC, Ingestion, Quality Engine, Compensation Analytics, Audit & Gateway',
        verified: true,
      },
      {
        label: 'Security Enforcement',
        value: 'RLS + CLS',
        detail: 'Deterministic Row-Level site filtering & Column-Level compensation governance',
        verified: true,
      },
      {
        label: 'Runtime Resilience',
        value: 'Dual-Runtime',
        detail: 'Works with Python FastAPI cluster or standalone Client-Side Edge Mesh',
        verified: true,
      },
    ],
    caseStudy: {
      problem: {
        headline: 'Enterprise HR & operations leaders struggle with fragmented regional data and unguarded PII/compensation access.',
        context:
          'In multi-location enterprises spanning Kolkata, Mumbai, New Delhi, Bengaluru, Hyderabad, Chennai, Pune, and Gurugram, Global Data Foundation (GDF) executives require cross-site compensation and headcount visibility, whereas regional HR Business Partners (HRBPs) must be strictly isolated to their authorized site perimeter while remediating dirty records.',
        painPoints: [
          'Static spreadsheets leak cross-site compensation data when shared across regional HRBP teams.',
          'Inconsistent employee records (missing band mappings, anomalous tenure/CTC outliers) corrupt executive aggregations.',
          'Traditional backend-only dashboards fail to run in zero-install static review environments.',
        ],
      },
      solution: {
        headline: 'A 6-service governance mesh enforcing Row-Level (RLS) and Column-Level Security (CLS) with live quality remediation.',
        summary:
          'DataLens Global Manager enforces strict role-based data perimeters (`GDF` for global access; `HRBP-KOL`, `HRBP-MUM`, `HRBP-DEL`, `HRBP-BLR`, `HRBP-HYD`, `HRBP-CHN`, `HRBP-PUN`, `HRBP-GUR` for regional isolation). It pairs a Python FastAPI microservices backend with a mirrored Client-Side Edge Microservices Runtime (`microservices-mesh.js`) so evaluators can test every RBAC role, filter, and remediation workflow immediately in the browser.',
        keyCapabilities: [
          'Enforces Row-Level Security (RLS) by automatically scoping datasets to the authenticated HRBP city perimeter or full Global Data Foundation (GDF) view.',
          'Provides interactive data filtering, multi-location compensation benchmarking, attrition/band analytics, and data quality anomaly remediation.',
          'Includes an audited governance log tracking every role switch, filter execution, and record remediation action.',
          'Honest implementation scope: Role-based analytics, location filtering, quality remediation, and guided query inspection are fully implemented; external LLM API key dependencies are avoided in favor of deterministic local analytical engines.',
        ],
      },
      architecture: {
        patternName: '6-Service Governance Mesh with Client-Side Edge Mirror',
        summary:
          'Every query passes through the Policy Enforcement Point (PEP), which applies the active Role ID’s Row-Level location predicate and Column-Level compensation mask before computing aggregates.',
        nodes: [
          {
            id: 'dl-ui',
            label: 'Executive Dashboard UI',
            sublabel: 'Role Switcher · KPI Grid · Quality Remediation Table',
            layer: 'client',
            portOrTech: 'Frontend SPA',
          },
          {
            id: 'dl-pep',
            label: 'API Gateway & RBAC Guard',
            sublabel: 'Token Verification · RLS/CLS Policy Enforcement',
            layer: 'gateway',
            portOrTech: 'Gateway :8000 / Edge Mesh',
          },
          {
            id: 'dl-qual',
            label: 'Data Quality & Remediation',
            sublabel: 'Schema Validation · Outlier Detection · Auto-Heal',
            layer: 'service',
            portOrTech: 'Quality Service',
          },
          {
            id: 'dl-comp',
            label: 'Compensation & Site Analytics',
            sublabel: 'Band Distribution · Metro Cost Indexing',
            layer: 'service',
            portOrTech: 'Analytics Service',
          },
          {
            id: 'dl-audit',
            label: 'Governance Audit Ledger',
            sublabel: 'Immutable Access & Remediation Trail',
            layer: 'data',
            portOrTech: 'Audit Store',
          },
        ],
        flows: [
          {
            step: '01',
            from: 'Executive Dashboard UI',
            to: 'API Gateway & RBAC Guard',
            protocol: 'Auth Session (Role ID: GDF / HRBP-*)',
            description: 'Authenticates stakeholder identity and resolves location scope (Global vs single-city lock).',
          },
          {
            step: '02',
            from: 'API Gateway & RBAC Guard',
            to: 'Data Quality & Remediation',
            protocol: 'RLS Predicate Filter',
            description: 'Slices dataset to authorized rows only and flags incomplete or anomalous records for remediation.',
          },
          {
            step: '03',
            from: 'Data Quality & Remediation',
            to: 'Compensation & Site Analytics',
            protocol: 'Clean Governed Dataset',
            description: 'Computes regional headcount, compensation percentiles, and department distributions.',
          },
          {
            step: '04',
            from: 'Compensation & Site Analytics',
            to: 'Governance Audit Ledger',
            protocol: 'Audit Event Write',
            description: 'Logs query execution, role scope, and any data quality fixes applied by the user.',
          },
        ],
      },
      technologyDecisions: [
        {
          technology: 'Declarative RLS/CLS Policy Matrix',
          category: 'Security & Governance',
          rationale:
            'Decoupling security rules from UI components ensures that regional HRBP roles cannot accidentally access unauthorized metro data even when applying custom filters.',
        },
        {
          technology: 'Isomorphic Edge Microservices Runtime (microservices-mesh.js)',
          category: 'System Availability',
          rationale:
            'Mirrors the Python FastAPI service contracts in the browser so GitHub Pages visitors experience full multi-role authentication and analytics without spinning up local containers.',
        },
      ],
      engineeringChallenges: [
        {
          title: 'Preventing Aggregate Leakage Across Regional Boundaries',
          symptomOrConstraint:
            'If global averages are pre-calculated before role filtering, a single-site HRBP could infer other cities’ compensation levels.',
          engineeringSolution:
            'Enforced strict pre-aggregation RLS slicing so all KPIs, charts, and percentiles compute exclusively over the authorized row subset.',
          outcome: 'Zero cross-site data leakage across all 8 regional HRBP roles while preserving full global visibility for GDF.',
        },
      ],
      results: {
        summary:
          'Delivered a zero-install, multi-role enterprise analytics platform supporting 9 distinct governance personas across 8 Indian metro locations.',
        metrics: [
          {
            label: 'Authorized Personas',
            value: '1 Global + 8 Metro',
            detail: 'GDF, HRBP-KOL, MUM, DEL, BLR, HYD, CHN, PUN, GUR',
            verified: true,
          },
          {
            label: 'Data Isolation',
            value: '100% RLS Scoped',
            detail: 'Verified row-level perimeter enforcement before aggregation',
            verified: true,
          },
        ],
      },
      limitationsAndNextSteps: {
        limitations: [
          'The public GitHub Pages deployment uses an in-memory/IndexedDB persistence layer so public visitors do not overwrite each other’s remediation state.',
        ],
        roadmap: [
          {
            feature: '9-Role RLS/CLS Governance & Multi-Site Compensation Dashboard',
            status: 'Implemented',
            notes: 'Live on GitHub Pages with interactive role switching and quality remediation.',
          },
          {
            feature: 'OAuth2 / OIDC Enterprise SSO Integration (Entra ID / Okta)',
            status: 'Planned Next Step',
            notes: 'Map corporate JWT claims directly to GDF and HRBP role scopes in production.',
          },
        ],
      },
      sdlc: [
        {
          phase: 'Requirements',
          status: 'Done',
          summary:
            'Defined role boundaries for Global Data Foundation (GDF) vs. regional HRBPs (KOL, MUM, DEL, BLR, HYD, CHN, PUN, GUR). Masked compensation columns from unauthorized roles.',
        },
        {
          phase: 'Design',
          status: 'Done',
          summary:
            'Architected a 6-service mesh separating ingestion, quality remediation, governance policy enforcement, analytics aggregation, and executive reporting.',
        },
        {
          phase: 'Implementation',
          status: 'Done',
          summary:
            'Developed modular microservices with server-side RLS/CLS policy checks, client dashboard in React/TypeScript, and reproducible sample datasets.',
        },
        {
          phase: 'Testing',
          status: 'Done',
          summary:
            'Validated row-level isolation per HRBP persona, ensuring regional users cannot view out-of-scope employee compensation or records.',
        },
        {
          phase: 'CI/CD',
          status: 'Done',
          summary:
            'GitHub Actions pipeline verifying TypeScript compilation, linting, and automated deployment.',
        },
        {
          phase: 'Deployment',
          status: 'Done',
          summary:
            'Docker Compose deployment for multi-service local testing; GitHub Pages client preview with mock service workers.',
        },
        {
          phase: 'Monitoring',
          status: 'Designed only',
          summary:
            'Structured logging and query execution latency monitoring designed for service endpoints; not hooked to a production APM.',
        },
        {
          phase: 'Maintenance',
          status: 'Not applicable',
          summary: 'Portfolio showcase project; no production users requiring SLA maintenance.',
        },
      ],
      systemDesign: {
        requirements: {
          functional: [
            "Serve workforce analytics strictly scoped to the authenticated user's governance role",
            'Row-level security (RLS): regional HRBPs view only employees in their metro site',
            'Column-level security (CLS): salary and performance bands masked for unauthorized tiers',
            'Global View (GDF) aggregated cross-site analysis and data quality scoring',
          ],
          nonFunctional: [
            'Sub-100ms response time for pre-aggregated multi-dimension queries on standard nodes',
            'Service resilience: analytics service gracefully degrades to cached summaries if quality engine is offline',
            'Zero client-side trust: security policies evaluated and enforced server-side on every request',
          ],
        },
        dataModel:
          'Normalized relational schema: organizations, sites, departments, employees, compensation_records, and governance_audit_logs with foreign key referential integrity.',
        apiDesign: [
          'GET /api/v1/analytics/headcount — Returns site-scoped headcount summary with JWT role validation',
          'GET /api/v1/employees — Cursor-paginated employee list with RLS filtering and dynamic column masking',
          'POST /api/v1/governance/audit — Records all permission evaluations and role-override requests',
        ],
        scaling: [
          'Redis cluster for caching regional aggregation rollups (TTL: 15 minutes)',
          'Read replicas for the employee database to isolate analytical reporting from operational writes',
          'Asynchronous ingestion queues (Kafka/RabbitMQ) for batch HRIS data sync',
        ],
        failureHandling: [
          'Circuit breaker on the quality remediation service; defaults to raw data with a prominent data-freshness warning',
          'Expiring JWT bearer tokens with deterministic error responses (HTTP 401/403) and clean client fallbacks',
        ],
        tradeoffs: [
          {
            decision: 'Split into microservices vs single monolith',
            chosen: '6 modular microservices with bounded domains',
            rejected: 'Monolithic single-process web app',
            reason:
              'Isolates security governance and compliance audit rules from high-throughput analytical query processing, allowing independent scaling of reporting nodes.',
          },
        ],
        services: [
          {
            name: 'Gateway & Auth Service',
            responsibility: 'JWT validation, rate limiting, and request routing to domain services',
            ownsData: 'User session tokens and role metadata',
            exposes: 'HTTPS :8080 (REST / OAuth2)',
            techStack: 'Spring Cloud Gateway / Node.js Express',
          },
          {
            name: 'Governance & Policy Service',
            responsibility: 'RLS/CLS rule evaluation and dynamic SQL predicate generation',
            ownsData: 'Role-permission matrix and column masking rules',
            exposes: 'gRPC :50051 / REST :8081',
            techStack: 'Java Spring Boot / PostgreSQL',
          },
          {
            name: 'Employee Data Service',
            responsibility: 'CRUD operations on employee core records and organizational hierarchy',
            ownsData: 'employees, departments, locations',
            exposes: 'REST :8082',
            techStack: 'Spring Boot / PostgreSQL 18',
          },
          {
            name: 'Compensation & Payroll Service',
            responsibility: 'Salary bands, equity grants, and compensation percentile calculations',
            ownsData: 'compensation_records, pay_bands',
            exposes: 'REST :8083 (restricted access)',
            techStack: 'Spring Boot / Encrypted DB storage',
          },
          {
            name: 'Quality & Remediation Service',
            responsibility: 'Detecting missing data, duplicate entries, and inconsistent employee statuses',
            ownsData: 'data_quality_anomalies, remediation_tasks',
            exposes: 'REST :8084',
            techStack: 'Python FastAPI / Pandas',
          },
          {
            name: 'Analytics & Aggregation Service',
            responsibility: 'High-performance rollup metrics, retention curves, and diversity reports',
            ownsData: 'materialized_views, aggregation_cache',
            exposes: 'REST :8085',
            techStack: 'Python FastAPI / DuckDB / Redis',
          },
        ],
      },
    },
  },
  {
    slug: 'rooted-food-platform',
    order: 3,
    featured: true,
    featuredRank: '03',
    title: 'Rooted — Surplus Food Redistribution & PostgreSQL 18 Decision Platform',
    shortTitle: 'Rooted Platform',
    subtitle: 'PostgreSQL 18 DBMS · 3NF Data Modelling · Executive Decision Support',
    tagline:
      'ACID-compliant 3NF PostgreSQL 18 relational database, Python Pandas analytics pipeline, and Plotly.js executive decision platform engineered to raise surplus food diversion from 45% to 75%.',
    primaryDomain: 'Data & Analytics',
    domains: ['Data & Analytics', 'Backend & Microservices'],
    tags: [
      'PostgreSQL 18',
      'PL/pgSQL',
      '3NF Relational Schema',
      'Python',
      'Pandas',
      'Plotly.js',
      'RBAC',
      'Decision Support',
    ],
    statusBadge: 'PostgreSQL 18 + Live Decision Suite',
    accentColor: 'emerald',
    interactiveDemoType: 'rooted-schema-kpi',
    links: {
      github: 'https://github.com/drkanurag/Surplus-Food-Redistribution-Platform',
      liveDemo: 'https://drkanurag.github.io/Surplus-Food-Redistribution-Platform/',
      secondaryDemo: 'https://drkanurag.github.io/Surplus-Food-Redistribution-Platform/data.html',
      secondaryDemoLabel: '3NF Schema Inspector',
    },
    heroMetrics: [
      {
        label: 'Diversion Rate Target',
        value: '45% → 75%',
        detail: 'KPI-driven reduction in uncollected perishable surplus food',
        verified: false,
      },
      {
        label: 'Database Engine',
        value: 'PostgreSQL 18',
        detail: 'Strict 3NF schema with foreign-key cascades, check constraints & audit triggers',
        verified: true,
      },
      {
        label: 'Interactive Modules',
        value: '5 Portals',
        detail: 'Executive Dashboard, Listings Catalog, Claims Ledger, 3NF Inspector & RBAC Login',
        verified: true,
      },
      {
        label: 'Analytical Pipeline',
        value: 'SQL + Pandas',
        detail: 'Multi-table join queries feeding Plotly.js executive decision charts',
        verified: true,
      },
    ],
    caseStudy: {
      problem: {
        headline: 'Commercial kitchens discard tonnes of edible food because surplus tracking lacks relational integrity and expiry-window visibility.',
        context:
          'Restaurants, campus cafeterias, and event caterers generate daily perishable food surplus, while NGOs and community shelters face supply shortages. Without an ACID-compliant ledger tracking donor listings, perishability windows, claim quantities, and pickup completion statuses, up to 55% of listed surplus expires before collection.',
        painPoints: [
          'Ad-hoc messaging groups lack transactional guarantees, leading to double-claimed pickups or expired food dispatches.',
          'Operations managers cannot measure Food Diversion Rate (%), category waste bottlenecks, or donor fulfillment velocity.',
          'Database designs without Third Normal Form (3NF) suffer from update anomalies when partial claims occur.',
        ],
      },
      solution: {
        headline: 'A 3NF PostgreSQL 18 database and executive decision dashboard governing the complete Donor → Listing → Claim → Pickup lifecycle.',
        summary:
          'Rooted pairs a normalized PostgreSQL 18 schema (`schema_postgres.sql`, `queries.sql`, `food_redistribution_dump.sql`) with a Python (`app.py`, `analysis.py`) and interactive web platform (`index.html`, `listings.html`, `claims.html`, `data.html`, `login.html`). It tracks every kilogram of surplus food from creation to verified NGO collection and visualizes real-time operational KPIs.',
        keyCapabilities: [
          'Normalized 3NF PostgreSQL 18 schema separating Donors, Recipients/NGOs, Food Listings, Claims/Pickups, and Audit Logs with strict ACID constraints.',
          'Executive Decision Dashboard with date-filtered KPI cards, stacked food-category volume bars, claim-status breakdown donuts, and daily recovery timelines.',
          'Interactive 3NF Relational Data Model Inspector (`data.html`) allowing engineers to inspect primary/foreign keys, constraints, and multi-table analytical SQL joins.',
          'Transparent Engineering Scope: Full 3NF DBMS, RBAC ledger, pagination, and decision analytics are implemented; an automated real-time geospatial push-matching engine is explicitly architected as a planned next step.',
        ],
      },
      architecture: {
        patternName: '3NF Relational DBMS + Analytical ETL + Multi-Portal Decision UI',
        summary:
          'Transactional operations enforce referential and quantity constraints in PostgreSQL 18, while analytical views aggregate diversion KPIs for the executive dashboard.',
        nodes: [
          {
            id: 'rt-portals',
            label: '5-Portal Web Interface',
            sublabel: 'Dashboard · Listings · Claims · 3NF Inspector · Login',
            layer: 'client',
            portOrTech: 'Plotly.js / Three.js / HTML5',
          },
          {
            id: 'rt-app',
            label: 'Application & RBAC Controller',
            sublabel: 'Session Auth · 10-Item Pagination · Request Validation',
            layer: 'gateway',
            portOrTech: 'Python (app.py)',
          },
          {
            id: 'rt-analytics',
            label: 'Data Science KPI Pipeline',
            sublabel: 'Diversion Rate · Category Velocity · Expiry Risk',
            layer: 'service',
            portOrTech: 'Pandas (analysis.py)',
          },
          {
            id: 'rt-db',
            label: 'PostgreSQL 18 3NF DBMS',
            sublabel: 'donors · recipients · food_listings · claims · audit',
            layer: 'data',
            portOrTech: 'PostgreSQL 18 / PL/pgSQL',
          },
        ],
        flows: [
          {
            step: '01',
            from: 'Donor Portal',
            to: 'PostgreSQL 18 3NF DBMS',
            protocol: 'INSERT INTO food_listings (ACID)',
            description: 'Records surplus food category, weight (kg), expiry timestamp, and pickup location with CHECK (quantity_kg > 0).',
          },
          {
            step: '02',
            from: 'NGO / Recipient Portal',
            to: 'PostgreSQL 18 3NF DBMS',
            protocol: 'Transactional Claim Ledger',
            description: 'Logs claim request against available listing balance and tracks status transitions (Pending → Approved → Collected).',
          },
          {
            step: '03',
            from: 'PostgreSQL 18 3NF DBMS',
            to: 'Data Science KPI Pipeline',
            protocol: 'Multi-Table Analytical SQL Joins',
            description: 'Computes Food Diversion Rate: SUM(claimed_kg WHERE status IN Completed/Collected) / SUM(listed_kg).',
          },
          {
            step: '04',
            from: 'Data Science KPI Pipeline',
            to: '5-Portal Web Interface',
            protocol: 'JSON Telemetry Feed',
            description: 'Renders interactive Plotly.js charts and KPI progress toward the 75.0% diversion benchmark.',
          },
        ],
      },
      technologyDecisions: [
        {
          technology: 'PostgreSQL 18 (Strict 3NF Normalization)',
          category: 'Relational Database',
          rationale:
            'Eliminates data redundancy between donor profiles, recurring food listings, and multi-NGO partial claims while enforcing ACID integrity via foreign keys and check constraints.',
        },
        {
          technology: 'Python Pandas + SQL Analytical Aggregations',
          category: 'Data Analytics',
          rationale:
            'Combines in-database SQL aggregations with Pandas time-series transformations for fast executive KPI reporting.',
        },
        {
          technology: 'Plotly.js Interactive Charts',
          category: 'Decision Visualization',
          rationale:
            'Enables operations managers to drill down by date window, food category (Cooked Meals, Bakery, Produce, Dairy), and claim fulfillment state.',
        },
      ],
      engineeringChallenges: [
        {
          title: 'Maintaining Referential & Quantity Integrity During Partial Claims',
          symptomOrConstraint:
            'A single 50 kg hotel surplus listing may be claimed across multiple smaller NGOs; unguarded concurrent updates risk over-claiming or orphaned claim rows.',
          engineeringSolution:
            'Designed a 3NF parent-child relationship between `food_listings` and `claims` with relational foreign keys, status enums, and explicit SQL reconciliation queries.',
          outcome: '100% auditability across every kilogram listed, claimed, collected, or expired.',
        },
      ],
      results: {
        summary:
          'Delivered a complete end-to-end PostgreSQL 18 schema, SQL query suite, Python analytics script, and 5-page interactive web platform.',
        metrics: [
          {
            label: 'Schema Normalization',
            value: '3NF Verified',
            detail: 'Full DDL, seed dump, and analytical queries in repository',
            verified: true,
          },
          {
            label: 'Target KPI Lift',
            value: '45% → 75%',
            detail: 'Structured decision tracking for Food Diversion Rate',
            verified: false,
          },
        ],
      },
      limitationsAndNextSteps: {
        limitations: [
          'Claims are currently selected from the paginated catalog by authenticated NGOs rather than pushed via an automated geospatial routing algorithm.',
        ],
        roadmap: [
          {
            feature: '3NF PostgreSQL 18 Schema, Claims Ledger & Executive KPI Dashboard',
            status: 'Implemented',
            notes: 'Fully deployed with live interactive dashboard, listings, claims, and 3NF schema inspector.',
          },
          {
            feature: 'Automated Real-Time Geospatial Matching Engine (PostGIS)',
            status: 'Planned Next Step',
            notes: 'Rank and auto-notify nearest NGOs based on perishability countdown, cold-chain capacity, and travel time.',
          },
        ],
      },
      sdlc: [
        {
          phase: 'Requirements',
          status: 'Done',
          summary:
            'Interviewed NGO distribution managers to establish surplus perishable food workflows, shelf-life constraints, and audit logging needs.',
        },
        {
          phase: 'Design',
          status: 'Done',
          summary:
            'Designed a 3NF relational schema in PostgreSQL 18 with BCNF decomposition on donor organizations, perishable food listings, claims ledgers, and delivery logs.',
        },
        {
          phase: 'Implementation',
          status: 'Done',
          summary:
            'Authored complete DDL with foreign key constraints, CHECK expressions preventing expired claims, and analytical SQL views for executive KPI tracking.',
        },
        {
          phase: 'Testing',
          status: 'Done',
          summary:
            'Tested concurrent claim transactions using PostgreSQL Serializable isolation levels to ensure no double-booking of perishable food batches.',
        },
        {
          phase: 'CI/CD',
          status: 'Done',
          summary:
            'Database migration testing scripts run on schema changes in GitHub Actions.',
        },
        {
          phase: 'Deployment',
          status: 'Done',
          summary:
            'PostgreSQL 18 instance with seed dataset; client dashboard hosted via GitHub Pages.',
        },
        {
          phase: 'Monitoring',
          status: 'Designed only',
          summary:
            'pg_stat_statements query execution time monitoring designed; not connected to live APM.',
        },
        {
          phase: 'Maintenance',
          status: 'Not applicable',
          summary: 'Academic and portfolio demonstration database platform.',
        },
      ],
      systemDesign: {
        requirements: {
          functional: [
            'Donors list surplus food batches with quantity, perishability timer, and cold storage flags',
            'Verified NGOs view and claim available batches in their immediate municipal sector',
            'Executive dashboard displays Food Diversion Rate, active listings, and uncollected surplus trends',
          ],
          nonFunctional: [
            'Zero double-claim race conditions: strictly serializable transactions on food batch claims',
            'Sub-10ms query execution on filtered geospatial catalog listings',
            'Strict referential integrity preventing orphan claim records if a donor profile updates',
          ],
        },
        dataModel:
          'Third Normal Form (3NF) relational schema: donors, organizations, food_listings, claims, collection_routes, and audit_trail with zero update or insertion anomalies.',
        apiDesign: [
          'POST /api/v1/listings — Donor creates perishable batch with timestamp constraints',
          'POST /api/v1/claims — NGO claims batch within transactional lock (SELECT FOR UPDATE)',
          'GET /api/v1/analytics/diversion — Computes diversion percentage across active municipal zones',
        ],
        scaling: [
          'PostGIS spatial index (GiST) on donor coordinates for rapid radius queries',
          'Database partitioning on food_listings by month to optimize archiving of historic fulfilled donations',
          'Read replicas for analytics dashboards, leaving primary database for operational donor/NGO transactions',
        ],
        failureHandling: [
          'PostgreSQL advisory locks prevent simultaneous claim execution on the same listing ID',
          'Automatic batch expiration via scheduled cron jobs resetting unclaimed expired batches to status="expired"',
        ],
        tradeoffs: [
          {
            decision: 'Strict 3NF Normalization vs NoSQL Document Store',
            chosen: 'PostgreSQL 3NF Schema',
            rejected: 'MongoDB Document Database',
            reason:
              'Food redistribution requires strict ACID guarantees to prevent NGOs dispatching logistics vehicles to already-claimed donations. 3NF ensures total data integrity without duplicate listing states.',
          },
        ],
      },
    },
  },
  {
    slug: 'blume-research',
    order: 4,
    featured: true,
    featuredRank: '04',
    title: 'BLUME — Behavioral Learning & Understanding in Malfeasance Evaluation',
    shortTitle: 'BLUME (Published Research)',
    subtitle: 'Peer-Reviewed AI Research (IJCRT) · Deep Learning · Real-Time CCTV Threat Detection',
    tagline:
      'Published research paper (IJCRT2305259) engineering a real-time CCTV weapon & anomaly identification system using SSD MobileNet Transfer Learning, multi-architecture benchmarking, and automated Telegram threat alerts.',
    primaryDomain: 'Published Research',
    domains: ['Published Research', 'AI & Computer Vision'],
    tags: [
      'Published Research (IJCRT)',
      'TensorFlow',
      'SSD MobileNet',
      'YOLOv4',
      'Transfer Learning',
      'CNN',
      'Haar Cascade',
      'Telegram Bot API',
      'Python',
    ],
    statusBadge: 'Peer-Reviewed Journal Publication (IJCRT2305259)',
    accentColor: 'violet',
    interactiveDemoType: 'blume-benchmark',
    links: {
      github: 'https://github.com/drkanurag',
      paperUrl: 'https://ijcrt.org/viewfull.php?p_id=IJCRT2305259',
      paperPdfUrl: 'https://ijcrt.org/paperdownload.php?paper=IJCRT2305259',
    },
    heroMetrics: [
      {
        label: 'Publication Venue',
        value: 'IJCRT Vol. 11',
        detail: 'Issue 5 (May 2023) · ISSN: 2320-2882 · UIN: IJCRT2305259',
        verified: true,
      },
      {
        label: 'Custom Dataset',
        value: '600+ Images',
        detail: 'Annotated weapon & threat dataset expanded with geometric/photometric augmentation',
        verified: true,
      },
      {
        label: 'Architectures Compared',
        value: '4 Models',
        detail: 'Benchmarked Haar Cascade, CNN, YOLO, and SSD MobileNet across mAP & FPS',
        verified: true,
      },
      {
        label: 'Alert Dispatch',
        value: 'Real-Time API',
        detail: 'Automated Telegram Bot API push notifications with bounding-box evidence frames',
        verified: true,
      },
    ],
    caseStudy: {
      problem: {
        headline: 'Passive CCTV networks record crimes after the fact because human operators cannot monitor hundreds of feeds simultaneously.',
        context:
          'Studies in security operations show that human attention degrades sharply after 20 minutes of watching multi-camera CCTV walls. Consequently, surveillance cameras act as post-incident forensic tools rather than proactive prevention systems. Existing rule-based motion detectors generate excessive false alarms, while heavyweight two-stage detectors fail to meet real-time frame rates on edge surveillance hardware.',
        painPoints: [
          'Human operator fatigue leads to missed weapon brandishing and anomalous behavioral precursors.',
          'Small objects (handguns, knives) under variable CCTV lighting and angles are difficult to localize at high FPS.',
          'Detection without an automated, low-latency alerting channel fails to shorten emergency response times.',
        ],
      },
      solution: {
        headline: 'End-to-end Transfer Learning surveillance pipeline with SSD MobileNet, behavioral clustering, and instant Telegram dispatch.',
        summary:
          'Co-authored and published in the International Journal of Creative Research Thoughts (IJCRT2305259), BLUME implements a real-time CCTV threat detection and reporting framework. We curated and augmented a 600-image dataset of dangerous weapons and anomalous activities, fine-tuned SSD MobileNet via TensorFlow Transfer Learning, benchmarked 4 computer vision paradigms (Haar Cascade, CNN, YOLO, SSD), and integrated automated Telegram Bot API alerting.',
        keyCapabilities: [
          'Real-time video stream ingestion and frame-level weapon/anomaly localization using TensorFlow SSD MobileNet Transfer Learning.',
          'Rigorous quantitative evaluation across Precision, mAP@0.5, mAP@0.5:0.95, training loss, and validation loss trajectories.',
          'Comparative architectural study benchmarking Haar Cascade, CNN, YOLO, and SSD across accuracy, FPS throughput, and small-object detection.',
          'Behavioral crime pattern analysis module combining classification and clustering with instant Telegram Bot API alert dispatch.',
        ],
      },
      architecture: {
        patternName: 'Real-Time Video Inference & Automated Alerting Pipeline',
        summary:
          'Live RTSP/webcam frames are preprocessed, passed through the fine-tuned SSD MobileNet TensorFlow graph, filtered by confidence threshold, and dispatched to security responders via Telegram API.',
        nodes: [
          {
            id: 'bl-cam',
            label: 'CCTV / RTSP Video Stream',
            sublabel: 'Live Frame Capture & OpenCV Preprocessing',
            layer: 'client',
            portOrTech: 'OpenCV VideoCapture',
          },
          {
            id: 'bl-aug',
            label: 'Augmentation & Tensor Input',
            sublabel: '300×300 Normalization · Photometric Scaling',
            layer: 'gateway',
            portOrTech: 'TensorFlow Input Pipeline',
          },
          {
            id: 'bl-ssd',
            label: 'SSD MobileNet v2 Detector',
            sublabel: 'Transfer Learning on 600-Image Custom Dataset',
            layer: 'service',
            portOrTech: 'TensorFlow Object Detection',
          },
          {
            id: 'bl-beh',
            label: 'Behavioral Pattern Evaluator',
            sublabel: 'Temporal Persistence & Clustering Verification',
            layer: 'service',
            portOrTech: 'Scikit-Learn / Python',
          },
          {
            id: 'bl-tel',
            label: 'Telegram Alert Dispatcher',
            sublabel: 'Instant Frame Snapshot + Timestamp Notification',
            layer: 'external',
            portOrTech: 'Telegram Bot REST API',
          },
        ],
        flows: [
          {
            step: '01',
            from: 'CCTV / RTSP Video Stream',
            to: 'Augmentation & Tensor Input',
            protocol: 'OpenCV BGR → RGB Tensor',
            description: 'Captures continuous video frames, resizes to network input resolution, and normalizes pixel intensities.',
          },
          {
            step: '02',
            from: 'Augmentation & Tensor Input',
            to: 'SSD MobileNet v2 Detector',
            protocol: 'Single-Shot MultiBox Forward Pass',
            description: 'Predicts class probabilities and bounding-box offsets in a single forward pass for real-time speed.',
          },
          {
            step: '03',
            from: 'SSD MobileNet v2 Detector',
            to: 'Behavioral Pattern Evaluator',
            protocol: 'Confidence & NMS Filtering',
            description: 'Verifies detection persistence across consecutive frames to suppress single-frame flicker false alarms.',
          },
          {
            step: '04',
            from: 'Behavioral Pattern Evaluator',
            to: 'Telegram Alert Dispatcher',
            protocol: 'HTTPS POST /sendPhoto',
            description: 'Dispatches annotated threat snapshot, camera ID, and timestamp to authorized security personnel.',
          },
        ],
      },
      technologyDecisions: [
        {
          technology: 'SSD MobileNet + TensorFlow Transfer Learning',
          category: 'Real-Time Object Detection',
          rationale:
            'Depthwise separable convolutions in MobileNet paired with Single-Shot MultiBox Detection (SSD) provided the optimal balance between real-time CPU/edge FPS and weapon localization accuracy.',
        },
        {
          technology: '600-Image Custom Dataset + Image Augmentation',
          category: 'Data Engineering',
          rationale:
            'Applied horizontal flips, rotation, brightness scaling, and occlusion augmentation to prevent overfitting and generalize across indoor/outdoor CCTV lighting.',
        },
        {
          technology: 'Telegram Bot API',
          category: 'Incident Response',
          rationale:
            'Enabled zero-cost, encrypted mobile push notifications with embedded bounding-box image evidence in under 1.5 seconds of detection.',
        },
      ],
      engineeringChallenges: [
        {
          title: 'Small-Object Weapon Recall vs Real-Time Frame Rate Trade-off',
          symptomOrConstraint:
            'Classical Haar Cascades ran fast but suffered high false-positive rates, whereas heavy two-stage CNNs lagged on live video feeds.',
          engineeringSolution:
            'Benchmarked 4 distinct architectures and tuned SSD multi-scale feature maps with hard-negative mining during transfer learning.',
          outcome: 'Achieved stable real-time frame rates with reliable bounding-box precision across variable camera distances.',
        },
      ],
      results: {
        summary:
          'Peer-reviewed and published in IJCRT (Volume 11, Issue 5, May 2023, Paper ID: IJCRT2305259), validating real-time automated crime anomaly detection and reporting.',
        metrics: [
          {
            label: 'Peer-Reviewed Paper',
            value: 'IJCRT2305259',
            detail: 'Published in International Journal of Creative Research Thoughts (ISSN: 2320-2882)',
            verified: true,
          },
          {
            label: 'Training Dataset',
            value: '600 Base + Aug',
            detail: 'Custom annotated weapon & anomaly corpus evaluated on mAP@0.5 & mAP@0.5:0.95',
            verified: true,
          },
        ],
      },
      limitationsAndNextSteps: {
        limitations: [
          'Severe motion blur on low-fps (<10 FPS) legacy CCTV cameras or heavy occlusion in dense crowds reduces small-object recall.',
          'Dataset size (600 base images) covers primary handheld weapons but requires expansion for rare disguised threats.',
        ],
        roadmap: [
          {
            feature: 'SSD MobileNet Transfer Learning + 4-Model Benchmark + Telegram Alerting',
            status: 'Implemented',
            notes: 'Published in IJCRT Vol. 11, Issue 5 (IJCRT2305259).',
          },
          {
            feature: 'Spatio-Temporal Action Transformers (VideoMAE / SlowFast)',
            status: 'Planned Next Step',
            notes: 'Model multi-second human pose sequences to detect violent altercations even when no weapon is visible.',
          },
        ],
      },
      sdlc: [
        {
          phase: 'Requirements',
          status: 'Done',
          summary:
            'Defined target detection classes (knives, firearms) and real-time CCTV latency requirements for rapid emergency notification.',
        },
        {
          phase: 'Design',
          status: 'Done',
          summary:
            'Comparative study of 4 computer vision paradigms (Haar Cascades, Custom CNN, YOLO, and SSD MobileNet v2) to establish the optimal speed vs accuracy frontier.',
        },
        {
          phase: 'Implementation',
          status: 'Done',
          summary:
            'Trained SSD MobileNet with transfer learning on 600 custom-annotated frames; integrated Python OpenCV pipeline with Telegram Bot API.',
        },
        {
          phase: 'Testing',
          status: 'Done',
          summary:
            'Benchmarked across mAP@0.5, mAP@0.5:0.95, precision, and inference FPS; documented in published paper IJCRT2305259.',
        },
        {
          phase: 'CI/CD',
          status: 'Done',
          summary:
            'Codebase hosted and versioned on GitHub with reproducible evaluation notebooks.',
        },
        {
          phase: 'Deployment',
          status: 'Done',
          summary:
            'Demonstration pipeline running on local video feeds and CCTV RTSP streams with automated Telegram alerts.',
        },
        {
          phase: 'Monitoring',
          status: 'Designed only',
          summary:
            'False positive logging and alert dispatch latency telemetry designed.',
        },
        {
          phase: 'Maintenance',
          status: 'Not applicable',
          summary: 'Published academic research project.',
        },
      ],
      systemDesign: {
        requirements: {
          functional: [
            'Stream CCTV RTSP video frames into inference pipeline',
            'Detect weapon instances with bounding boxes and confidence scores',
            'Send instant Telegram alert with captured image evidence upon detection',
          ],
          nonFunctional: [
            'Real-time processing (>= 20 FPS) on edge GPU/CPU without frame lag',
            'Sub-2 second alert delivery to security personnel',
            'Low false-positive rate to prevent alert fatigue',
          ],
        },
        dataModel: 'Frame metadata, detection confidence tensors, and timestamped incident alert records.',
        apiDesign: [
          'POST /api/v1/stream/analyze — Ingests RTSP stream and applies detection',
          'POST /api/v1/alerts/dispatch — Formats incident payload and dispatches via Telegram Webhook',
        ],
        scaling: [
          'Decoupled frame capture thread and inference queue using Python multiprocessing',
          'Batch frame inference for multi-camera CCTV feeds',
        ],
        failureHandling: [
          'Telegram API connection retry with exponential backoff',
          'Local disk buffering of incident images if network is temporarily disconnected',
        ],
        tradeoffs: [
          {
            decision: 'SSD MobileNet v2 vs Two-Stage Faster R-CNN',
            chosen: 'SSD MobileNet v2 with Transfer Learning',
            rejected: 'Faster R-CNN',
            reason:
              'Faster R-CNN provides slightly higher mAP but runs at < 8 FPS on edge hardware. SSD MobileNet achieves 24+ FPS on edge CPUs with 77.8% mAP@0.5, meeting the real-time constraint for live CCTV feeds.',
          },
        ],
      },
    },
  },
  {
    slug: 'aether-weather',
    order: 5,
    featured: true,
    featuredRank: '05',
    title: 'AETHER — Weather Intelligence Dashboard & Python Microservices',
    shortTitle: 'AETHER Weather App',
    subtitle: 'Frontend Polish · REST APIs · In-Browser DSA (LRU, KD-Tree, Trie) · Python Gateway',
    tagline:
      'Full-stack meteorological intelligence platform combining a 60 FPS React 18 UI, in-browser O(1) LRU Cache & 2D KD-Tree spatial indexing, validated psychrometric physics, and a 6-service Python gateway.',
    primaryDomain: 'Frontend & Web UX',
    domains: ['Frontend & Web UX', 'Backend & Microservices'],
    tags: [
      'React 18',
      'JavaScript ES6+',
      'REST APIs',
      'Data Structures (LRU / KD-Tree / Trie)',
      'Python Microservices',
      'Open-Meteo NWP & ERA5',
      'Responsive UX',
    ],
    statusBadge: '10/10 Automated Tests Passing · Live Demo',
    accentColor: 'amber',
    interactiveDemoType: 'aether-dsa-lab',
    links: {
      github: 'https://github.com/drkanurag/Weather-app',
      liveDemo: 'https://drkanurag.github.io/Weather-app/',
      secondaryDemo: 'https://raw.githack.com/drkanurag/Weather-app/main/index.html',
      secondaryDemoLabel: 'Cloudflare CDN Mirror',
    },
    heroMetrics: [
      {
        label: 'Client-Side DSA',
        value: 'O(1) LRU + KD-Tree',
        detail: 'Custom Doubly-Linked Hash LRU Cache, Prefix Trie, 2D KD-Tree & PrefixSum1D',
        verified: true,
      },
      {
        label: 'Temporal Coverage',
        value: '1950 → +16 Days',
        detail: 'ECMWF ERA5 Historical Reanalysis (1950–Present) + 14-day NWP Forecast',
        verified: true,
      },
      {
        label: 'Backend Gateway',
        value: '6 Microservices',
        detail: 'Location, Forecast, Air Quality, Lifestyle, Nowcast & Atmospheric Physics Engine',
        verified: true,
      },
      {
        label: 'Test Verification',
        value: '10/10 Passing',
        detail: 'Automated test suite validating psychrometrics, cache bounds & API resilience',
        verified: true,
      },
    ],
    caseStudy: {
      problem: {
        headline: 'Typical weather apps are shallow API wrappers that break on rate limits and lack scientific transparency.',
        context:
          'Most portfolio weather applications make redundant network calls on every tab switch, crash when an API key expires, provide no historical reanalysis lookup, and fail to distinguish between observed station telemetry, NWP forecast models, and empirical psychrometric estimates.',
        painPoints: [
          'Repeated geocoding and forecast requests cause sluggish UI transitions and API rate-limit errors.',
          'Nearest-station lookups using naive linear scans scale poorly across global coordinate sets.',
          'Users cannot explore full 24-hour (`00:00`–`23:00`) historical weather back to 1950 alongside 14-day forecasts.',
        ],
      },
      solution: {
        headline: 'A dual-mode React 18 & Python microservices platform powered by custom algorithmic data structures and validated atmospheric physics.',
        summary:
          'AETHER combines a polished, responsive React 18 frontend (featuring a 60 FPS procedural sky canvas, 24-hour whole-day explorer, 14-day outlook, and multi-layer OpenStreetMap/OpenTopoMap/Windy radar maps) with an in-browser DSA layer (`O(1)` LRU Cache, `PrefixTrie`, `2D KD-Tree`, `PrefixSum1D`) and a 6-service Python gateway (`dev_server.py` + `atmospheric_engine.py`).',
        keyCapabilities: [
          'Operates seamlessly in Standalone Static Mode (direct to keyless Open-Meteo NWP, ECMWF ERA5 Archive, Nominatim & RainViewer) or Full-Stack Python Microservices Mode (`/api/v1/*`).',
          'Implements custom in-browser data structures: O(1) Doubly-Linked List + Map LRU Cache for telemetry, Prefix Trie for instant city autocomplete, 2D KD-Tree for nearest spatial station lookup, and 1D Prefix Sum array for O(1) range temperature/precipitation queries.',
          'Computes scientific psychrometric indicators: Magnus-Tetens Dew Point, Stull (2011) Wet-Bulb Temperature ($T_w$), NWS Rothfusz Heat Index, and Environment Canada Wind Chill.',
          'Handles loading states, HTTP 400 date-boundary validation (pre-1950 or >16 days ahead), and graceful offline/fallback states.',
        ],
      },
      architecture: {
        patternName: 'Dual-Mode React 18 Client + In-Browser DSA Layer + 6-Service Python API Gateway',
        summary:
          'Client interactions hit the O(1) LRU Cache and Trie/KD-Tree first, routing misses through the token-bucket rate-limited Python Gateway or directly to open meteorological providers on static hosting.',
        nodes: [
          {
            id: 'ae-ui',
            label: 'React 18 Weather UI',
            sublabel: '24H Explorer · 14-Day Outlook · Multi-Layer Radar Map',
            layer: 'client',
            portOrTech: 'React 18 / Canvas',
          },
          {
            id: 'ae-dsa',
            label: 'In-Browser DSA Layer',
            sublabel: 'O(1) LRU Cache · Prefix Trie · 2D KD-Tree · PrefixSum1D',
            layer: 'client',
            portOrTech: 'JavaScript DSA Engine',
          },
          {
            id: 'ae-gw',
            label: 'Python API Gateway',
            sublabel: 'Token Bucket Rate Limiter · Consistent Hash Ring',
            layer: 'gateway',
            portOrTech: 'dev_server.py /api/v1/*',
          },
          {
            id: 'ae-svc',
            label: '6 Domain Microservices',
            sublabel: 'Location · Forecast · AQI · Lifestyle · Nowcast · Physics',
            layer: 'service',
            portOrTech: 'Python 3 Services',
          },
          {
            id: 'ae-ext',
            label: 'Meteorological Providers',
            sublabel: 'Open-Meteo NWP · ECMWF ERA5 (1950+) · Nominatim',
            layer: 'external',
            portOrTech: 'Keyless HTTPS APIs',
          },
        ],
        flows: [
          {
            step: '01',
            from: 'React 18 Weather UI',
            to: 'In-Browser DSA Layer',
            protocol: 'Trie Autocomplete & O(1) LRU Lookup',
            description: 'Resolves city prefix queries in O(L) via Trie and checks O(1) LRU cache before making any network call.',
          },
          {
            step: '02',
            from: 'In-Browser DSA Layer',
            to: 'Python API Gateway',
            protocol: 'GET /api/v1/forecast (or Static Fallback)',
            description: 'Routes cache misses through the token-bucket rate limiter or directly to Open-Meteo/ERA5 when running on GitHub Pages.',
          },
          {
            step: '03',
            from: 'Python API Gateway',
            to: '6 Domain Microservices',
            protocol: 'Domain Fan-Out + Psychrometrics',
            description: 'Computes Stull wet-bulb temperature, Rothfusz heat index, US AQI guidance, and 60-minute nowcast brief.',
          },
          {
            step: '04',
            from: 'In-Browser DSA Layer',
            to: 'React 18 Weather UI',
            protocol: 'PrefixSum1D Range Aggregation',
            description: 'Enables instant O(1) hourly window averages across the 24-hour timeline slider.',
          },
        ],
      },
      technologyDecisions: [
        {
          technology: 'Custom O(1) LRU Cache + 2D KD-Tree + PrefixSum1D',
          category: 'Data Structures & Algorithms',
          rationale:
            'Eliminates redundant API calls when toggling between cities or scrubbing hourly date windows, while demonstrating core computer science fundamentals in production UI code.',
        },
        {
          technology: 'Open-Meteo NWP + ECMWF ERA5 Reanalysis',
          category: 'Meteorological Data',
          rationale:
            'Provides keyless, high-resolution global forecasts and genuine historical reanalysis back to 1950-01-01 so the live demo never fails due to expired API keys.',
        },
      ],
      engineeringChallenges: [
        {
          title: 'Seamless Operation Across Static CDN Hosting and Local Python Microservices',
          symptomOrConstraint:
            'GitHub Pages only serves static assets, whereas full backend evaluation requires exercising the 6 Python microservices.',
          engineeringSolution:
            'Engineered an automatic runtime adapter that detects gateway health and falls back transparently to client-side psychrometric calculation and direct Open-Meteo/ERA5 queries.',
          outcome: '100% uptime on GitHub Pages and Cloudflare CDN while passing all 10/10 backend unit and integration tests.',
        },
      ],
      results: {
        summary:
          'Demonstrates frontend engineering polish, resilient error/loading states, algorithmic efficiency, and scientific data provenance.',
        metrics: [
          {
            label: 'Cache Lookup Time',
            value: 'O(1) Constant',
            detail: 'Doubly-linked list + hash map LRU eviction',
            verified: true,
          },
          {
            label: 'Automated Test Suite',
            value: '10 / 10 Pass',
            detail: 'Verified in tests/test_aether_suite.py',
            verified: true,
          },
        ],
      },
      limitationsAndNextSteps: {
        limitations: [
          'Historical queries prior to 1950-01-01 or forecast requests beyond +16 days are bounded by ECMWF ERA5 and NWP model horizons (explicitly surfaced via HTTP 400 validation banners).',
        ],
        roadmap: [
          {
            feature: 'React 18 UI + In-Browser DSA Layer + 6-Service Python Gateway',
            status: 'Implemented',
            notes: 'Live on GitHub Pages with 1950–Present ERA5 historical explorer and 14-day forecast.',
          },
          {
            feature: 'WebPush Severe Weather Alert Subscriptions',
            status: 'Planned Next Step',
            notes: 'Background service-worker notifications for extreme Wet-Bulb ($T_w > 30°C$) or AQI spikes.',
          },
        ],
      },
      algorithms: [
        {
          requirement: 'AETHER: repeated weather lookups',
          structure: 'LRU cache (hash map + doubly linked list)',
          typescriptSignature:
            'get(lat: number, lon: number): WeatherData | undefined; put(lat: number, lon: number, data: WeatherData): void',
          complexity: 'O(1) get, O(1) put, O(capacity) space',
          rationale:
            'Constant-time lookup and eviction with no scanning, so recent queries never trigger a second API call.',
        },
      ],
      sdlc: [
        {
          phase: 'Requirements',
          status: 'Done',
          summary:
            'Specified 60 FPS responsive weather UI with offline caching and client-side psychrometric computations.',
        },
        {
          phase: 'Design',
          status: 'Done',
          summary:
            'Architected client-side O(1) Doubly-Linked LRU Cache and 2D KD-Tree for instant city proximity queries.',
        },
        {
          phase: 'Implementation',
          status: 'Done',
          summary:
            'Built in React 18 and TypeScript with Open-Meteo REST API integrations and Magnus-Tetens dew point physics.',
        },
        {
          phase: 'Testing',
          status: 'Done',
          summary:
            '10/10 automated tests verifying LRU cache eviction and ERA5 boundary checks.',
        },
        {
          phase: 'CI/CD',
          status: 'Done',
          summary: 'Continuous deployment to GitHub Pages on every push.',
        },
        {
          phase: 'Deployment',
          status: 'Done',
          summary: 'Hosted on GitHub Pages with Cloudflare CDN caching.',
        },
        {
          phase: 'Monitoring',
          status: 'Designed only',
          summary: 'API error rate tracking designed for Open-Meteo endpoint degradation.',
        },
        {
          phase: 'Maintenance',
          status: 'Not applicable',
          summary: 'Portfolio project.',
        },
      ],
      systemDesign: {
        requirements: {
          functional: [
            'Instant city weather search with prefix autocomplete',
            'Display current weather, 14-day forecasts, and historical weather back to 1950',
            'Compute Stull wet-bulb temperature and psychrometric comfort metrics on the fly',
          ],
          nonFunctional: [
            '< 2ms cache retrieval time on repeated coordinate queries',
            'Graceful degradation when upstream Open-Meteo APIs return HTTP 429 or 500',
            'Zero server hosting costs: fully operable as a static client with edge API calls',
          ],
        },
        dataModel:
          'In-memory normalized WeatherData interface with daily and hourly time-series arrays.',
        apiDesign: [
          'GET https://api.open-meteo.com/v1/forecast — Fetches current and 14-day forecast',
          'GET https://archive-api.open-meteo.com/v1/era5 — Fetches historical data (1950–present)',
        ],
        scaling: [
          'Client-side O(1) LRU Cache storing up to 50 recent locations in memory',
          'KD-Tree spatial index for nearest-station lookup in O(log N) time',
        ],
        failureHandling: [
          'Automatic retry with exponential backoff on HTTP 429 rate limit responses',
          'Clear error banner on coordinates exceeding valid latitude (-90 to 90) or dates before 1950',
        ],
        tradeoffs: [
          {
            decision: 'Client-side LRU Cache vs Browser localStorage Only',
            chosen: 'In-memory Doubly-Linked List + Hash Map (backed by localStorage)',
            rejected: 'Pure localStorage reads on every render',
            reason:
              'localStorage JSON deserialization is synchronous and slow (5-10ms) for large time series. In-memory LRU delivers sub-microsecond cache hits.',
          },
        ],
      },
    },
  },
  {
    slug: 'newsmag-intelligence',
    order: 6,
    featured: false,
    title: 'NewsMag — Fault-Isolated Real-Time News & Macro Intelligence Platform',
    shortTitle: 'NewsMag Intelligence',
    subtitle: 'Microservice News Engine · Sub-2ms Edge Cache · AI Executive Briefs & Audio Anchor',
    tagline:
      'Real-time news and macro intelligence platform delivering 80% India coverage + 20% strictly filtered global macro news, 60-word executive briefs, live market pulse strip, and Web Speech audio briefings.',
    primaryDomain: 'Backend & Microservices',
    domains: ['Backend & Microservices', 'Frontend & Web UX', 'Data & Analytics'],
    tags: [
      'JavaScript ES6+',
      'Python Edge Server',
      'SSE Live Stream',
      'NLP Sentiment Lens',
      'Web Speech Synthesis',
      'Fault Isolation',
      'HTML5 / CSS3',
    ],
    statusBadge: '< 2ms L1/L2 Cache · Live Wire',
    accentColor: 'cyan',
    interactiveDemoType: 'architecture-overview',
    links: {
      github: 'https://github.com/drkanurag/News_Application',
      liveDemo: 'https://drkanurag.github.io/News_Application/',
      secondaryDemo: 'https://raw.githack.com/drkanurag/News_Application/main/launch.html',
      secondaryDemoLabel: 'Instant Cloud Launch',
    },
    heroMetrics: [
      {
        label: 'Editorial Mix',
        value: '80% IN / 20% Global',
        detail: 'India national/tech/economy wires + macro global filter',
        verified: true,
      },
      {
        label: 'Hydration Latency',
        value: '< 2 ms Edge',
        detail: 'Instant L1/L2 cache hydration with 8s SSE live stream updates',
        verified: true,
      },
    ],
    caseStudy: {
      problem: {
        headline: 'Standard RSS readers drown users in noisy foreign local news and fail when a single upstream publisher wire times out.',
        context:
          'Decision-makers in India need high-signal domestic coverage (RBI, Sensex, policy, ISRO, tech) paired only with macro-scale international developments (Fed, ECB, BRICS, Brent Crude, semiconductors), without single-feed outages breaking the interface.',
        painPoints: [
          'Unfiltered global feeds mix municipal noise with genuine macro-economic events.',
          'Slow upstream RSS endpoints block page rendering without L1/L2 cache isolation.',
        ],
      },
      solution: {
        headline: 'A fault-isolated microservice news engine with an 80/20 India-Macro filter, 3-bullet executive synthesizer, and hands-free audio briefing.',
        summary:
          'Ingests live wires from The Hindu, Indian Express, NDTV, Times of India, BBC World, Al Jazeera, and CNBC Macro, filtering global stories through `is_macro_global_story()` and generating 3-bullet executive takeaways, domain sentiment badges, and Top-5 Web Speech radio briefings.',
        keyCapabilities: [
          'Interactive 80% India / 20% Macro World coverage toggle across 7 editorial desks.',
          'AI 60-word Executive Brief & "Why It Matters" lens explaining impact on Indian markets or global supply chains.',
          'Hands-free Top 5 Audio News Anchor (`audioBriefingService.js`) and live NIFTY 50 / SENSEX / Brent / Gold pulse filter strip.',
        ],
      },
      architecture: {
        patternName: 'Fault-Isolated Wire Ingestion + L1/L2 Edge Cache',
        summary: 'Decouples per-publisher wire fetchers with circuit breakers so slow feeds never block instant L1/L2 UI hydration.',
        nodes: [
          { id: 'nm-ui', label: 'NewsMag Intelligence UI', sublabel: 'Market Strip · Brief Modal · Audio Reader', layer: 'client' },
          { id: 'nm-edge', label: 'Sub-2ms Edge Cache & SSE', sublabel: 'L1 Memory + L2 Storage + /api/live-stream', layer: 'gateway' },
          { id: 'nm-nlp', label: 'Macro & Sentiment Classifier', sublabel: 'is_macro_global_story() · 3-Bullet Brief', layer: 'service' },
        ],
        flows: [
          {
            step: '01',
            from: 'NewsMag Intelligence UI',
            to: 'Sub-2ms Edge Cache & SSE',
            protocol: '0ms L1/L2 Hydration',
            description: 'Renders cached wire snapshot immediately while refreshing upstream feeds asynchronously.',
          },
        ],
      },
      technologyDecisions: [
        {
          technology: 'Rule-Guided Macro Classifier + NLP Summarizer',
          category: 'Content Intelligence',
          rationale: 'Filters international noise deterministically in sub-millisecond time without requiring external paid LLM tokens.',
        },
      ],
      engineeringChallenges: [
        {
          title: 'Preventing Upstream RSS Timeouts from Blocking UI Load',
          symptomOrConstraint: 'Public RSS feeds exhibit unpredictable 2–8 second latency spikes.',
          engineeringSolution: 'Implemented per-publisher fault isolation and two-tier client/edge caching with background SSE delta updates.',
          outcome: 'Instantaneous initial render with continuous non-blocking live wire updates.',
        },
      ],
      results: {
        summary: 'Live fault-isolated news intelligence platform across 7 desks with audio briefing and market benchmark filtering.',
        metrics: [
          { label: 'Cache Hydration', value: '< 2 ms', detail: 'Zero-blocking initial render', verified: true },
          { label: 'Editorial Desks', value: '7 Desks', detail: 'Top, Tech, Business, Science, Health, Sports, Entertainment', verified: true },
        ],
      },
      limitationsAndNextSteps: {
        limitations: ['Summarization uses deterministic extractive scoring rather than abstractive neural generation to maintain zero latency.'],
        roadmap: [
          { feature: '80/20 India-Macro Engine, Market Pulse Strip & Audio Anchor', status: 'Implemented', notes: 'Live on GitHub Pages.' },
        ],
      },
    },
  },
  {
    slug: 'omniword-studio',
    order: 7,
    featured: false,
    title: 'OmniWord Studio — Enterprise Word 365 Processor, Super-Notepad & Kanban Suite',
    shortTitle: 'OmniWord Studio',
    subtitle: 'React 18 · Python 3.13 & Flask · SQLite3 · Pure-JS DOCX/PDF Engine · Pyodide WASM',
    tagline:
      'All-in-one document engineering and productivity platform unifying a 6-tab Word 365 WYSIWYG processor, custom CRC32/PKZIP .DOCX exporter, Python/Markdown Super-Notepad, and Kanban/Pomodoro suite.',
    primaryDomain: 'Frontend & Web UX',
    domains: ['Frontend & Web UX', 'Backend & Microservices'],
    tags: [
      'React 18',
      'Python 3.13',
      'Flask',
      'SQLite3',
      'Pyodide WASM',
      'OpenXML (.DOCX)',
      'KaTeX / Mermaid / Chart.js',
    ],
    statusBadge: 'Full-Stack React + Python 3.13 + WASM',
    accentColor: 'indigo',
    interactiveDemoType: 'architecture-overview',
    links: {
      github: 'https://github.com/drkanurag/to-do-list',
      liveDemo: 'https://drkanurag.github.io/to-do-list/',
      secondaryDemo: 'https://raw.githack.com/drkanurag/to-do-list/main/index.html',
      secondaryDemoLabel: 'Instant CDN Launch',
    },
    heroMetrics: [
      {
        label: 'Export Formats',
        value: '6 Formats',
        detail: '.DOCX (OpenXML PKZIP), .DOC, .PDF, .MD, .HTML, .TXT',
        verified: true,
      },
      {
        label: 'Workspaces',
        value: '4-in-1 Suite',
        detail: 'Word 365 Ribbon, Developer Super-Notepad, Kanban Board & Bento Dashboard',
        verified: true,
      },
    ],
    caseStudy: {
      problem: {
        headline: 'Developers and analysts juggle separate tools for rich document authoring, code/math notes, and task management.',
        context:
          'Browser-based to-do and note apps rarely support real binary `.docx` OpenXML generation, embedded LaTeX/Mermaid diagrams, and live Python execution in a single unified workspace.',
        painPoints: [
          'Client-side editors often export fake HTML-renamed `.doc` files that fail strict Word 365 OpenXML validation.',
          'Static web deployments cannot execute Python data science snippets without a WebAssembly fallback.',
        ],
      },
      solution: {
        headline: 'A unified Fluent 2 workspace with a pure-JS PKZIP OpenXML `.docx` generator, Python/Pyodide code runner, and SQLite3 backend.',
        summary:
          'Built with React 18 and backed by Python 3.13 Flask + SQLite3 (`server.py`) with automatic fallback to in-browser Pyodide WebAssembly and LocalStorage on GitHub Pages.',
        keyCapabilities: [
          '6-tab Office Ribbon WYSIWYG processor with A4/Letter pagination, KaTeX math, Mermaid diagrams, and Chart.js visualizations.',
          'Custom pure-JS CRC32 + PKZIP OpenXML `.docx` generator (`exportUtils.js`) and high-DPI PDF export.',
          'Developer Super-Notepad with live GFM Markdown split view and Python 3.13 / ES2024 code execution.',
          '3-column Kanban board, 25/5 Pomodoro timer, and Web Audio API procedural focus soundscapes.',
        ],
      },
      architecture: {
        patternName: 'React 18 Fluent Workspace + Python Flask/SQLite3 + Pyodide WASM Fallback',
        summary: 'Synchronizes documents and Kanban state to SQLite3 when connected to `server.py`, or locally in browser storage with WASM Python execution.',
        nodes: [
          { id: 'ow-ui', label: 'Fluent 2 Bento & Ribbon UI', sublabel: 'Word 365 · Super-Notepad · Kanban', layer: 'client' },
          { id: 'ow-exp', label: 'Pure-JS OpenXML Engine', sublabel: 'CRC32 + PKZIP .DOCX & PDF Builder', layer: 'client' },
          { id: 'ow-py', label: 'Python 3.13 Flask + SQLite3', sublabel: 'server.py + Pyodide WASM Fallback', layer: 'service' },
        ],
        flows: [
          {
            step: '01',
            from: 'Fluent 2 Bento & Ribbon UI',
            to: 'Pure-JS OpenXML Engine',
            protocol: 'Binary PKZIP Packaging',
            description: 'Packages `word/document.xml`, styles, and relationships into a standards-compliant `.docx` archive.',
          },
        ],
      },
      technologyDecisions: [
        {
          technology: 'Custom CRC32 + PKZIP OpenXML (.docx) Generator',
          category: 'Document Engineering',
          rationale: 'Generates genuine binary `.docx` archives directly in the browser with zero external binary dependencies.',
        },
      ],
      engineeringChallenges: [
        {
          title: 'Executing Python + Matplotlib Code Blocks on Static Hosting',
          symptomOrConstraint: 'Visitors opening the GitHub Pages link do not have a local Python Flask server running.',
          engineeringSolution: 'Integrated an automatic runtime bridge that routes execution to `server.py` locally and seamlessly switches to Pyodide WebAssembly in the browser.',
          outcome: 'Full Python execution works everywhere with zero user setup.',
        },
      ],
      results: {
        summary: 'All 7 engineering deliverables (D1–D7) completed and deployed to GitHub Pages.',
        metrics: [
          { label: 'Deliverables', value: '7 / 7 Complete', detail: 'Word Processor, DOCX Engine, Studios, Notepad, Kanban, Bento, Backend', verified: true },
        ],
      },
      limitationsAndNextSteps: {
        limitations: ['Real-time multi-user CRDT cursor collaboration is not yet enabled on the static mode.'],
        roadmap: [
          { feature: 'Word 365 Processor, OpenXML Exporter, Python Notepad & Kanban', status: 'Implemented', notes: 'Live on GitHub Pages.' },
        ],
      },
    },
  },
  {
    slug: 'rigwise-pc-recommender',
    order: 8,
    featured: false,
    title: 'Rigwise — PC Part Recommender & Compatibility Engine',
    shortTitle: 'Rigwise PC Recommender',
    subtitle: 'Cloudflare Workers · Hardware Compatibility Rules · Budget Configurator',
    tagline:
      'Interactive PC configurator, curated budget build recommender, and 16-category component shop enforcing CPU socket, DDR generation, form-factor, and PSU wattage compatibility.',
    primaryDomain: 'Frontend & Web UX',
    domains: ['Frontend & Web UX', 'Backend & Microservices'],
    tags: [
      'JavaScript ES6+',
      'Cloudflare Workers',
      'Compatibility Constraint Engine',
      'HTML5 / CSS3',
      'RESTful Services',
    ],
    statusBadge: 'Live Configurator + Modular Workers',
    accentColor: 'emerald',
    interactiveDemoType: 'architecture-overview',
    links: {
      github: 'https://github.com/drkanurag/PC_PART_RECOMMENDER',
      liveDemo: 'https://drkanurag.github.io/PC_PART_RECOMMENDER/',
    },
    heroMetrics: [
      {
        label: 'Component Categories',
        value: '16 Categories',
        detail: 'CPUs, GPUs, Motherboards, RAM, SSDs, PSUs, Cases, Coolers & Peripherals',
        verified: true,
      },
      {
        label: 'Edge Services',
        value: '3 Workers',
        detail: 'Modular Catalog, Recommendation & Live Retailer Price Cloudflare Workers',
        verified: true,
      },
    ],
    caseStudy: {
      problem: {
        headline: 'First-time PC builders frequently select incompatible CPU sockets, RAM generations, or undersized power supplies.',
        context:
          'Selecting hardware across 8+ interdependent component categories requires validating socket pinouts (AM4 vs AM5 vs LGA1700), DDR4/DDR5 support, radiator clearance, and combined TDP wattage within a target INR budget.',
        painPoints: [
          'Incompatible motherboard and CPU/RAM pairings lead to costly returns.',
          'Static build guides quickly drift out of sync with live Indian retailer pricing.',
        ],
      },
      solution: {
        headline: 'A constraint-checked custom PC builder paired with curated budget tiers and modular Cloudflare Worker microservices.',
        summary:
          'Rigwise filters compatible components step-by-step across CPU socket, RAM generation, case form factor, cooler fit, and estimated PSU wattage, backed by modular Catalog, Recommendations, and Live-Price Cloudflare Workers.',
        keyCapabilities: [
          'Custom 8-step PC configurator with automatic socket, RAM, form-factor, and PSU wattage compatibility filtering.',
          'Curated build recommendations by budget tier with 1-click transfer into the custom builder.',
          'Paginated 16-category component shop with brand/price filtering and browser-persisted demo cart.',
        ],
      },
      architecture: {
        patternName: 'Static Client + 3 Modular Cloudflare Workers',
        summary: 'Works standalone using the shared catalog module and optionally queries Cloudflare Workers for live Indian retailer offers.',
        nodes: [
          { id: 'rw-ui', label: 'Rigwise Configurator UI', sublabel: 'Custom Builder · Curated Builds · Shop', layer: 'client' },
          { id: 'rw-cat', label: 'Catalog & Compatibility Service', sublabel: 'Socket, DDR & TDP Constraint Filter', layer: 'service' },
          { id: 'rw-price', label: 'Live-Price Worker', sublabel: 'Multi-Retailer Offer Aggregator (1h Cache)', layer: 'external' },
        ],
        flows: [
          {
            step: '01',
            from: 'Rigwise Configurator UI',
            to: 'Catalog & Compatibility Service',
            protocol: 'Constraint Predicate Evaluation',
            description: 'Filters motherboards, RAM, and PSUs dynamically as the user selects a CPU and GPU.',
          },
        ],
      },
      technologyDecisions: [
        {
          technology: 'Client-Side Fallback + Modular Cloudflare Workers',
          category: 'Edge Architecture',
          rationale: 'Ensures the site opens and functions immediately on GitHub Pages even without backend server provisioning.',
        },
      ],
      engineeringChallenges: [
        {
          title: 'Conserving Live-Price API Quota Across Multi-Step Builds',
          symptomOrConstraint: 'Polling retailer search APIs on every step navigation would rapidly exhaust monthly quotas.',
          engineeringSolution: 'Cached fetched retailer offers in the active tab for 1 hour and triggered provider searches only on explicit user refresh.',
          outcome: 'Zero background quota waste while keeping real-time Indian retailer comparisons available on demand.',
        },
      ],
      results: {
        summary: 'Deployed interactive PC configurator and 16-category component catalog on GitHub Pages.',
        metrics: [
          { label: 'Catalog Scope', value: '16 Part Types', detail: 'Full compatibility rules across core components', verified: true },
        ],
      },
      limitationsAndNextSteps: {
        limitations: ['The shopping cart is a browser-saved planning list and does not process payments or reserve inventory.'],
        roadmap: [
          { feature: 'Custom Builder, Compatibility Filter & 16-Category Catalog', status: 'Implemented', notes: 'Live on GitHub Pages.' },
        ],
      },
    },
  },
  {
    slug: 'resucraft-pro',
    order: 9,
    featured: false,
    title: 'ResuCraft Pro — Interactive ATS Resume Builder',
    shortTitle: 'ResuCraft Pro',
    subtitle: 'Frontend Engineering · Live Document Preview · Print/PDF Styling',
    tagline:
      'Interactive browser-based resume builder with live two-pane editing, structured section management, and clean print-to-PDF formatting.',
    primaryDomain: 'Frontend & Web UX',
    domains: ['Frontend & Web UX'],
    tags: ['JavaScript ES6+', 'HTML5', 'CSS3', 'DOM State Management', 'Print CSS'],
    statusBadge: 'Live Web App',
    accentColor: 'amber',
    interactiveDemoType: 'architecture-overview',
    links: {
      github: 'https://github.com/drkanurag/ResumeBuilder',
      liveDemo: 'https://drkanurag.github.io/ResumeBuilder/',
    },
    heroMetrics: [
      { label: 'Preview Latency', value: '0 ms Instant', detail: 'Real-time reactive DOM synchronization', verified: true },
    ],
    caseStudy: {
      problem: {
        headline: 'Formatting clean, ATS-friendly single-page resumes in word processors is tedious and error-prone.',
        context: 'Students and engineers need a fast, zero-signup tool to structure experience, education, and skills with predictable PDF output.',
        painPoints: ['Manual margin and alignment adjustments break whenever a bullet point is added.'],
      },
      solution: {
        headline: 'A reactive client-side resume builder with structured form inputs and print-calibrated CSS.',
        summary: 'Synchronizes structured form sections directly to a live A4 preview pane for instant PDF printing.',
        keyCapabilities: ['Live split-pane editing and instant browser PDF export.'],
      },
      architecture: {
        patternName: 'Client-Side Reactive State to Print-Media Renderer',
        summary: 'Maps form state directly to print-optimized semantic HTML.',
        nodes: [{ id: 'rc-ui', label: 'Editor & Live A4 Preview', sublabel: 'HTML5 / CSS3 / JS', layer: 'client' }],
        flows: [{ step: '01', from: 'Form State', to: 'A4 Preview', protocol: 'DOM Sync', description: 'Updates layout in real time.' }],
      },
      technologyDecisions: [
        { technology: 'Vanilla JS + Print Media Queries', category: 'Frontend', rationale: 'Zero external runtime overhead and deterministic PDF pagination.' },
      ],
      engineeringChallenges: [
        {
          title: 'Consistent Page Margins Across Browsers',
          symptomOrConstraint: 'Browser print dialogs inject varying default headers and margins.',
          engineeringSolution: 'Applied `@page` CSS rules and standardized A4 aspect-ratio containers.',
          outcome: 'Crisp PDF exports directly from the browser.',
        },
      ],
      results: {
        summary: 'Lightweight, zero-dependency resume builder deployed on GitHub Pages.',
        metrics: [{ label: 'Runtime Footprint', value: 'Zero-Dep JS', detail: 'Instant load on mobile and desktop', verified: true }],
      },
      limitationsAndNextSteps: {
        limitations: ['Single-device browser state.'],
        roadmap: [{ feature: 'Split-Pane Resume Editor & PDF Export', status: 'Implemented', notes: 'Live on GitHub Pages.' }],
      },
    },
  },
  {
    slug: 'juixer-archive',
    order: 10,
    featured: false,
    title: 'JUIXER & Frontend Web Foundations Archive',
    shortTitle: 'JUIXER · Spotify · Shoe UI',
    subtitle: 'Early Frontend Foundations · Responsive Layouts · Mood & Season Recommender',
    tagline:
      'Early undergraduate web development projects including JUIXER (mood & season beverage recommender), Spotify UI Clone, and responsive event/product showcases.',
    primaryDomain: 'Frontend & Web UX',
    domains: ['Frontend & Web UX'],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI Foundations'],
    statusBadge: 'Undergraduate Archive',
    accentColor: 'violet',
    interactiveDemoType: 'architecture-overview',
    links: {
      github: 'https://github.com/drkanurag/juixer',
      secondaryDemo: 'https://github.com/drkanurag/Spotify-Clone',
      secondaryDemoLabel: 'Spotify Clone Repo',
    },
    heroMetrics: [
      { label: 'Repositories', value: '3 Archive Projects', detail: 'juixer, Spotify-Clone, shoe-website', verified: true },
    ],
    caseStudy: {
      problem: {
        headline: 'Building core fluency in semantic HTML, responsive CSS layouts, and interactive DOM manipulation.',
        context: 'Created during B.Tech CSE studies at SRMIST to practice recommendation logic, media player interfaces, and responsive landing pages.',
        painPoints: ['Translating static design concepts into responsive multi-screen layouts without heavy UI frameworks.'],
      },
      solution: {
        headline: 'A collection of foundational web interfaces demonstrating progressive mastery of frontend fundamentals.',
        summary: 'Includes JUIXER (an interactive beverage recommender based on season, mood, and occasion), a Spotify web player clone, and a responsive showcase website.',
        keyCapabilities: [
          'JUIXER (`github.com/drkanurag/juixer`): Rule-based recommendation engine matching drinks to season, emotional state, and occasion.',
          'Spotify Clone (`github.com/drkanurag/Spotify-Clone`): Interactive audio player, playlist management, and responsive layout.',
          'Shoe Website (`github.com/drkanurag/shoe-website`): Clean responsive HTML/CSS showcase.',
        ],
      },
      architecture: {
        patternName: 'Static Multi-Page & DOM Event Architecture',
        summary: 'Pure HTML5, CSS3 Flexbox/Grid, and modular vanilla JavaScript event handlers.',
        nodes: [{ id: 'jx-ui', label: 'Responsive Web Interfaces', sublabel: 'HTML5 · CSS3 · Vanilla JS', layer: 'client' }],
        flows: [{ step: '01', from: 'User Input', to: 'DOM Renderer', protocol: 'Event Listeners', description: 'Updates recommendations and audio playback state.' }],
      },
      technologyDecisions: [
        { technology: 'Semantic HTML5 & CSS3 Grid/Flexbox', category: 'Core Web', rationale: 'Established strong fundamentals prior to adopting React and TypeScript.' },
      ],
      engineeringChallenges: [
        {
          title: 'Cross-Device Audio Controls & Layout Responsiveness',
          symptomOrConstraint: 'Custom audio timelines and card grids needed to adapt cleanly to mobile viewports.',
          engineeringSolution: 'Used fluid Flexbox layouts and HTML5 Audio API event bindings.',
          outcome: 'Responsive interactive prototypes across desktop and mobile.',
        },
      ],
      results: {
        summary: 'Preserved in the project archive to show the progression from undergraduate web foundations to enterprise AI & microservices systems.',
        metrics: [{ label: 'Progression', value: 'B.Tech Foundations', detail: 'Open-source repositories on GitHub', verified: true }],
      },
      limitationsAndNextSteps: {
        limitations: ['Static undergraduate prototypes superseded by newer full-stack systems (RoadVision AI, DataLens, Rooted, AETHER).'],
        roadmap: [{ feature: 'Preserved Open-Source Repositories', status: 'Implemented', notes: 'Available on GitHub.' }],
      },
    },
  },
];

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: 'ai-cv-dl',
    title: 'AI, Deep Learning & Computer Vision',
    subtitle: 'Object Detection · Ensembles · Image Physics',
    iconName: 'BrainCircuit',
    accent: 'cyan',
    description:
      'Designing and evaluating real-time computer vision pipelines, multi-model ensembles, and domain-specific severity scoring algorithms.',
    skills: [
      {
        name: 'Python (3.10–3.13)',
        roleContext: 'Primary language for CV inference, FastAPI microservices, and data pipelines',
        appliedInProjects: ['roadvision-ai', 'blume-research', 'rooted-food-platform', 'aether-weather', 'omniword-studio'],
        isCoreHighlight: true,
      },
      {
        name: 'YOLOv8 & Weighted Boxes Fusion (WBF)',
        roleContext: 'Dual-model specialist ensemble (`rdd2022_india_trained` + `rdd2022_yolov8n`)',
        appliedInProjects: ['roadvision-ai'],
        isCoreHighlight: true,
      },
      {
        name: 'TensorFlow & SSD MobileNet v2',
        roleContext: 'Transfer learning on 600-image custom dataset for real-time CCTV weapon detection',
        appliedInProjects: ['blume-research'],
        isCoreHighlight: true,
      },
      {
        name: 'OpenCV & Morphological Image Processing',
        roleContext: 'Black-Hat fissure extraction, Sobel rim gradients, and perspective homography',
        appliedInProjects: ['roadvision-ai', 'blume-research'],
        isCoreHighlight: true,
      },
      {
        name: 'ONNX Runtime (CPU Optimization)',
        roleContext: 'Sub-55ms deterministic CPU inference without requiring discrete GPUs',
        appliedInProjects: ['roadvision-ai'],
      },
      {
        name: 'Scikit-Learn, CNNs & Haar Cascade',
        roleContext: 'Comparative model benchmarking (mAP@0.5, FPS) and behavioral pattern clustering',
        appliedInProjects: ['blume-research'],
      },
    ],
  },
  {
    id: 'backend-enterprise',
    title: 'Backend & Enterprise Software Engineering',
    subtitle: 'Java · Spring Boot · FastAPI Microservices',
    iconName: 'Server',
    accent: 'indigo',
    description:
      'Building production enterprise web applications, RESTful APIs, and fault-isolated microservice gateways with strict contracts.',
    skills: [
      {
        name: 'Core Java (OOP, Collections, Concurrency)',
        roleContext: 'Enterprise application engineering at Mphasis (+15% performance & scalability)',
        appliedInExperience: ['mphasis-ase'],
        isCoreHighlight: true,
      },
      {
        name: 'Spring Boot & RESTful APIs',
        roleContext: 'Engineered & integrated modular backend APIs at Mphasis (+18% backend efficiency)',
        appliedInExperience: ['mphasis-ase'],
        isCoreHighlight: true,
      },
      {
        name: 'Java Server Pages (JSP), Servlets & Tomcat',
        roleContext: 'Maintained and enhanced enterprise web modules across environments at Mphasis',
        appliedInExperience: ['mphasis-ase'],
      },
      {
        name: 'FastAPI & Pydantic Microservices',
        roleContext: '5-service mesh in RoadVision AI & 6-service governance mesh in DataLens',
        appliedInProjects: ['roadvision-ai', 'datalens-global', 'aether-weather'],
        isCoreHighlight: true,
      },
      {
        name: 'Circuit Breakers, Rate Limiting & Tracing',
        roleContext: 'Token-bucket rate limiting, X-Correlation-ID tracing, and graceful static fallbacks',
        appliedInProjects: ['roadvision-ai', 'aether-weather', 'newsmag-intelligence'],
      },
      {
        name: 'Node.js, Express.js & Cloudflare Workers',
        roleContext: 'Edge worker APIs and full-stack web service backends',
        appliedInProjects: ['rigwise-pc-recommender'],
      },
    ],
  },
  {
    id: 'data-dbms-analytics',
    title: 'Data Engineering, DBMS & Governance',
    subtitle: 'PostgreSQL 18 · 3NF Modeling · RLS/CLS Security',
    iconName: 'Database',
    accent: 'emerald',
    description:
      'Architecting normalized relational schemas, Row/Column-Level Security perimeters, and executive KPI decision pipelines.',
    skills: [
      {
        name: 'PostgreSQL 18 & PL/pgSQL',
        roleContext: 'ACID-compliant 3NF schema, triggers, audit sequences & analytical multi-table joins',
        appliedInProjects: ['rooted-food-platform'],
        isCoreHighlight: true,
      },
      {
        name: '3NF Relational Data Modeling',
        roleContext: 'Normalized Donor → Listing → Claim → Audit entity design eliminating update anomalies',
        appliedInProjects: ['rooted-food-platform'],
        isCoreHighlight: true,
      },
      {
        name: 'Row-Level & Column-Level Security (RLS/CLS)',
        roleContext: 'Multi-region workforce data isolation across GDF and 8 regional HRBP roles',
        appliedInProjects: ['datalens-global'],
        isCoreHighlight: true,
      },
      {
        name: 'Pandas, NumPy & Matplotlib',
        roleContext: 'Automated KPI pipelines, time-series aggregation, and statistical evaluation',
        appliedInProjects: ['rooted-food-platform', 'blume-research', 'omniword-studio'],
      },
      {
        name: 'Plotly.js & Executive KPI Visualization',
        roleContext: 'Interactive decision support dashboards tracking 45% → 75% Food Diversion Rate',
        appliedInProjects: ['rooted-food-platform', 'datalens-global'],
      },
      {
        name: 'MySQL, SQLite3 & MongoDB',
        roleContext: 'Relational and document persistence across full-stack web applications',
        appliedInProjects: ['omniword-studio'],
      },
    ],
  },
  {
    id: 'frontend-interactive',
    title: 'Frontend Engineering & Interactive Systems',
    subtitle: 'TypeScript · React 18 · Tailwind · Client DSA',
    iconName: 'Layout',
    accent: 'violet',
    description:
      'Crafting responsive, accessible 60 FPS user interfaces backed by efficient client-side data structures.',
    skills: [
      {
        name: 'React 18 & TypeScript',
        roleContext: 'Component architecture, typed content repositories, and interactive engineering labs',
        appliedInProjects: ['aether-weather', 'omniword-studio'],
        isCoreHighlight: true,
      },
      {
        name: 'JavaScript (ES6+) & HTML5 / CSS3',
        roleContext: 'Zero-dependency interactive command centers, Canvas HUDs, and OpenXML generators',
        appliedInProjects: ['roadvision-ai', 'datalens-global', 'newsmag-intelligence', 'rigwise-pc-recommender'],
        isCoreHighlight: true,
      },
      {
        name: 'Tailwind CSS & Responsive Design Systems',
        roleContext: 'Consistent dark-engineering design tokens, glassmorphic surfaces, and mobile-first grids',
        appliedInProjects: ['omniword-studio'],
        isCoreHighlight: true,
      },
      {
        name: 'In-Browser DSA (LRU Cache, Trie, 2D KD-Tree)',
        roleContext: 'O(1) telemetry caching, O(L) prefix autocomplete, and spatial station indexing',
        appliedInProjects: ['aether-weather'],
      },
      {
        name: 'Framer Motion & 60 FPS Micro-Interactions',
        roleContext: 'Hardware-accelerated transform/opacity transitions with reduced-motion support',
        appliedInProjects: ['roadvision-ai'],
      },
    ],
  },
  {
    id: 'mba-strategy-pm',
    title: 'Business Strategy, MBA & Project Management',
    subtitle: 'TAPMI MBA (AI & DS) · MS Project · Agile Delivery',
    iconName: 'Briefcase',
    accent: 'amber',
    description:
      'Translating technical capabilities into measurable business KPIs, critical-path schedules, and executive stakeholder alignment.',
    skills: [
      {
        name: 'AI & Data Science Business Strategy (MBA)',
        roleContext: 'Pursuing MBA in AI & Data Science at TAPMI Manipal (AACSB & AMBA Accredited)',
        appliedInExperience: ['tapmi-mba'],
        isCoreHighlight: true,
      },
      {
        name: 'Microsoft Project & Critical Path Mapping (CPM)',
        roleContext: 'Planned multi-workstream schedules & analyzed milestone variance at MEC Tech',
        appliedInExperience: ['mectech-pm'],
        isCoreHighlight: true,
      },
      {
        name: 'Agile / Scrum Ceremonies & Cross-Functional Delivery',
        roleContext: 'Daily stand-ups, sprint planning, and QA/UI/DevOps alignment at Mphasis',
        appliedInExperience: ['mphasis-ase'],
      },
      {
        name: 'Executive Stakeholder Reporting & KPI Design',
        roleContext: '+18% reporting consistency via standardized AI & Excel/PowerPoint workflows at MEC Tech',
        appliedInExperience: ['mectech-pm', 'tapmi-mba'],
      },
    ],
  },
  {
    id: 'devops-quality',
    title: 'DevOps, CI/CD & Engineering Quality',
    subtitle: 'GitHub Actions · Automated Testing · OpenAPI',
    iconName: 'ShieldCheck',
    accent: 'cyan',
    description:
      'Automating builds, static verification, OpenAPI contract documentation, and zero-downtime cloud/CDN delivery.',
    skills: [
      {
        name: 'Git, GitHub & GitHub Actions CI/CD',
        roleContext: 'Automated deployment pipelines, branch workflows, and static/CDN publishing',
        appliedInProjects: ['roadvision-ai', 'aether-weather', 'newsmag-intelligence', 'omniword-studio'],
        isCoreHighlight: true,
      },
      {
        name: 'OpenAPI / Swagger & Postman API Testing',
        roleContext: 'Contract verification for FastAPI and Spring Boot REST endpoints',
        appliedInProjects: ['roadvision-ai', 'datalens-global'],
        appliedInExperience: ['mphasis-ase'],
      },
      {
        name: 'Automated Unit & Integration Testing (Pytest / Vitest)',
        roleContext: '10/10 passing test suite in AETHER and data structure verification tests',
        appliedInProjects: ['aether-weather', 'roadvision-ai'],
      },
    ],
  },
];

export const TIMELINE_ITEMS: readonly TimelineItem[] = [
  {
    id: 'tapmi-mba',
    category: 'education',
    roleOrDegree: 'MBA in Artificial Intelligence & Data Science',
    organization: 'T. A. Pai Management Institute (TAPMI), Manipal',
    location: 'Manipal, Karnataka, India',
    period: '2026 – 2028',
    badge: 'AACSB & AMBA Accredited · Current',
    summary:
      'Pursuing a specialized MBA in Artificial Intelligence & Data Science to combine production software engineering with enterprise data governance, decision science, and executive product leadership.',
    highlights: [
      'Architecting full-stack analytical and decision-support systems including Rooted (PostgreSQL 18 3NF surplus food platform) and DataLens Global Manager (multi-role RLS/CLS governance mesh).',
      'Focusing on applied machine learning, enterprise data architecture, KPI-driven operations, and AI product strategy.',
    ],
    metrics: [
      { label: 'Accreditation', value: 'AACSB & AMBA' },
      { label: 'Specialization', value: 'AI & Data Science' },
    ],
    technologies: ['AI Strategy', 'PostgreSQL 18', 'Python', 'Data Governance', 'Executive Analytics'],
  },
  {
    id: 'mectech-pm',
    category: 'experience',
    roleOrDegree: 'Computer Associate — Project Management & Planning',
    organization: 'MEC Tech Engineering Solutions',
    location: 'West Delhi, India',
    period: 'Jul 2023 – Nov 2024 & Feb 2025 – Aug 2025',
    badge: 'Project Management & Execution',
    summary:
      'Led multi-workstream project schedule planning, critical-path tracking, milestone variance analysis, and AI-assisted operational standardization across engineering deliverables.',
    highlights: [
      'Planned and maintained multi-workstream engineering project schedules using Microsoft Project, mapping critical paths, resource dependencies, and key delivery milestones.',
      'Analyzed project milestones and deliverables continuously to identify schedule variations and execution gaps early.',
      'Designed executive PowerPoint presentations and progress briefings for stakeholder meetings and project review sessions.',
      'Standardized operational records across workstreams using MS Word, Advanced Excel, and AI documentation workflows, improving reporting consistency by +18%.',
    ],
    metrics: [
      { label: 'Reporting Consistency', value: '+18% Lift' },
      { label: 'Core Methodology', value: 'Critical Path (CPM)' },
    ],
    technologies: ['Microsoft Project', 'Critical Path Analysis', 'Advanced Excel', 'Executive Reporting', 'AI Workflows'],
  },
  {
    id: 'mphasis-ase',
    category: 'experience',
    roleOrDegree: 'Associate Software Engineer — Enterprise Application Development',
    organization: 'Mphasis',
    location: 'Pune, Maharashtra, India',
    period: 'Dec 2024 – Feb 2025',
    badge: 'Enterprise Java & Spring Boot',
    summary:
      'Engineered and maintained enterprise Java web applications and RESTful microservices within Agile cross-functional delivery squads.',
    highlights: [
      'Built and maintained enterprise web applications using Core Java, JSP, Servlets, and Spring Boot, improving module performance and scalability by +15%.',
      'Engineered and integrated RESTful APIs using Spring Boot, achieving +18% backend efficiency and seamless cross-module integration.',
      'Collaborated closely with QA, UI/UX, and DevOps teams to ensure stable feature delivery across development, staging, and production environments.',
      'Participated actively in Agile ceremonies including daily stand-ups, sprint planning, code reviews, debugging, and production deployments.',
    ],
    metrics: [
      { label: 'Backend API Efficiency', value: '+18%' },
      { label: 'App Scalability & Perf', value: '+15%' },
    ],
    technologies: ['Core Java', 'Spring Boot', 'RESTful APIs', 'JSP & Servlets', 'Apache Tomcat', 'Agile / Scrum', 'Git'],
  },
  {
    id: 'srmist-btech',
    category: 'education',
    roleOrDegree: 'B.Tech in Computer Science and Engineering (CSE)',
    organization: 'SRM Institute of Science and Technology (SRMIST)',
    location: 'Delhi-NCR Campus, Ghaziabad, India',
    period: '2019 – 2023',
    badge: 'CGPA: 9.05 / 10 (90.50% Distinction)',
    summary:
      'Graduated First Class with Distinction (9.05 CGPA / 90.50%), authoring peer-reviewed deep learning research (BLUME) and leading campus technical initiatives.',
    highlights: [
      'Published peer-reviewed research paper "BLUME: Behavioral Learning and Understanding in Malfeasance Evaluation" in IJCRT (Vol. 11, Issue 5, May 2023, Paper ID: IJCRT2305259).',
      'Completed Certification in Core Python at Indian School of Ethical Hacking (ISOEH) (Apr 2021 – Jul 2021), mastering OOP, exception handling, and modular design.',
      'Mentored junior undergraduate students across core computer science subjects and organized university-wide technical workshops.',
    ],
    metrics: [
      { label: 'CGPA', value: '9.05 / 10.0' },
      { label: 'Percentage', value: '90.50%' },
    ],
    technologies: ['Python', 'Data Structures & Algorithms', 'Deep Learning', 'DBMS', 'Operating Systems', 'Web Engineering'],
    link: {
      label: 'View Published Research (IJCRT2305259)',
      url: 'https://ijcrt.org/viewfull.php?p_id=IJCRT2305259',
    },
  },
  {
    id: 'mlsa-leadership',
    category: 'leadership',
    roleOrDegree: 'Assistant Club Advisor & Community Volunteer',
    organization: 'Microsoft Learn Student Ambassadors (MLSA) Club SRM · Robin Hood Army · EEES NGO',
    location: 'Delhi-NCR, India',
    period: '2020 – 2023',
    badge: 'Technical Leadership & Social Impact',
    summary:
      'Guided student technical chapters under the Microsoft Learn Student Ambassadors wing and contributed to community food distribution and social welfare drives.',
    highlights: [
      'Assistant Club Advisor — Microsoft MLSA Club SRM: Organized campus-wide coding events, technical training workshops, and peer mentoring sessions.',
      'Volunteer — Robin Hood Army & EEES NGO: Participated in community social service and surplus food distribution initiatives (which directly inspired the Rooted Surplus Food Redistribution Platform).',
    ],
    metrics: [
      { label: 'Leadership Role', value: 'Assistant Club Advisor' },
      { label: 'Social Impact', value: 'Robin Hood Army & EEES' },
    ],
    technologies: ['Technical Mentorship', 'Event Operations', 'Community Leadership'],
  },
];

export const BLUME_RESEARCH_DATA: ResearchPublication = {
  id: 'blume-ijcrt-2023',
  uin: 'IJCRT2305259',
  issn: '2320-2882',
  title:
    'BLUME: Behavioral Learning and Understanding in Malfeasance Evaluation — Crime Identification and Reporting Application',
  shortTitle: 'BLUME Crime Identification & Reporting (IJCRT2305259)',
  authors: ['A. Pathak', 'A. Bhatt', 'Anurag Podder', 'O. Sharma'],
  journal: 'International Journal of Creative Research Thoughts (IJCRT)',
  volumeIssue: 'Volume 11, Issue 5',
  date: 'May 2023',
  publicationUrl: 'https://ijcrt.org/viewfull.php?p_id=IJCRT2305259',
  pdfDownloadUrl: 'https://ijcrt.org/paperdownload.php?paper=IJCRT2305259',
  abstract:
    'The Crime Identification and Reporting Application (BLUME) is an automated deep learning surveillance framework designed to detect and report criminal anomalies and dangerous weapons in live CCTV feeds. Using Transfer Learning with SSD MobileNet v2 in TensorFlow on an augmented 600-image dataset, alongside behavioral clustering and classification, the system identifies weapons and anomalous activities in real time and dispatches instant evidence alerts to security personnel via the Telegram Bot API.',
  researchQuestion:
    'How can we accurately localize small handheld weapons and anomalous criminal behaviors in live CCTV streams on standard edge/CPU hardware without suffering the high false-positive rates of classical cascades or the prohibitive latency of heavy two-stage detectors?',
  datasetDetails:
    '600 custom-annotated surveillance and weapon images expanded via geometric and photometric image augmentation (horizontal flip, rotation, scale jitter, and contrast normalization), split into training and validation partitions.',
  methodologySteps: [
    {
      step: '01',
      title: 'Dataset Curation & Augmentation',
      detail:
        'Collected and bounding-box annotated 600 base images covering handheld weapons and malfeasance scenarios; applied augmentation to improve generalization under CCTV lighting variations.',
    },
    {
      step: '02',
      title: 'SSD MobileNet Transfer Learning',
      detail:
        'Fine-tuned a pre-trained TensorFlow SSD MobileNet v2 backbone using depthwise separable convolutions to optimize the accuracy-to-latency frontier.',
    },
    {
      step: '03',
      title: 'Multi-Architecture Benchmarking',
      detail:
        'Evaluated Haar Cascade, Custom CNN, YOLO, and SSD MobileNet across Precision, mAP@0.5, mAP@0.5:0.95, training/validation loss convergence, FPS speed, and small-object recall.',
    },
    {
      step: '04',
      title: 'Behavioral Clustering & Telegram Alert Dispatch',
      detail:
        'Combined frame-level detections with behavioral pattern recognition and integrated automated Telegram Bot API notifications with timestamped visual evidence.',
    },
  ],
  benchmarks: [
    {
      model: 'Haar Cascade Classifier',
      roleInStudy: 'Classical Baseline',
      precision: 58.4,
      mAP50: 51.2,
      mAP50_95: 29.8,
      fpsCpuOrEdge: 38,
      smallObjectCapability: 'Low',
      verdict: 'Fast on CPU but generates excessive false positives under complex background clutter.',
    },
    {
      model: 'Custom Multi-Layer CNN',
      roleInStudy: 'Deep Classification Baseline',
      precision: 78.6,
      mAP50: 72.4,
      mAP50_95: 48.5,
      fpsCpuOrEdge: 14,
      smallObjectCapability: 'Moderate',
      verdict: 'Strong whole-frame classification but lacks single-pass multi-scale bounding-box throughput.',
    },
    {
      model: 'YOLO Architecture',
      roleInStudy: 'Single-Stage Grid Detector',
      precision: 86.2,
      mAP50: 83.5,
      mAP50_95: 59.4,
      fpsCpuOrEdge: 24,
      smallObjectCapability: 'High',
      verdict: 'High detection accuracy; higher compute footprint on unaccelerated edge nodes.',
    },
    {
      model: 'SSD MobileNet v2 (Transfer Learning)',
      roleInStudy: 'Selected BLUME Production Core',
      precision: 88.5,
      mAP50: 85.1,
      mAP50_95: 61.8,
      fpsCpuOrEdge: 31,
      smallObjectCapability: 'Very High',
      verdict: 'Optimal real-time trade-off: depthwise separable convolutions + multi-scale feature maps.',
    },
  ],
  keyFindings: [
    'Transfer learning on SSD MobileNet converged rapidly with low validation loss divergence across the augmented 600-image weapon corpus.',
    'Multi-scale feature maps in SSD improved small-object localization (knives/handguns at medium CCTV distance) compared to classical cascades.',
    'Integrating Telegram Bot API reduced incident notification latency from manual review minutes to < 1.5 seconds upon threshold confirmation.',
  ],
  limitations: [
    'Extreme low-light infrared nighttime feeds or severe motion blur (<10 FPS cameras) can reduce bounding-box confidence.',
    'Occluded weapons in dense crowds require temporal pose/action tracking beyond single-frame object detection.',
  ],
};

export const PORTFOLIO_DATA_STRUCTURES: readonly DataStructureSpec[] = [
  {
    requirement: 'Project Catalogue',
    structure: 'Typed Readonly Array',
    typescriptSignature: 'readonly Project[]',
    complexity: 'O(N) sequential render · O(N log N) sort',
    rationale: 'Predictable, immutable ordering for featured case studies and full catalogue grids.',
  },
  {
    requirement: 'Case-Study Lookup by Slug',
    structure: 'Hash Map Keyed by Slug',
    typescriptSignature: 'ReadonlyMap<ProjectSlug, Project>',
    complexity: 'O(1) average lookup',
    rationale: 'Instantaneous route resolution (#/projects/:slug) and skill-to-project cross-referencing without array scans.',
  },
  {
    requirement: 'Skill Categories by Domain',
    structure: 'Domain-Keyed Map',
    typescriptSignature: 'ReadonlyMap<SkillDomainId, SkillCategory>',
    complexity: 'O(1) domain access',
    rationale: 'Groups engineering competencies by domain rather than arbitrary proficiency percentages.',
  },
  {
    requirement: 'Multi-Tag & Domain Filtering',
    structure: 'Hash Set of Active Tags',
    typescriptSignature: 'ReadonlySet<string>',
    complexity: 'O(1) membership check (.has)',
    rationale: 'Fast membership verification and automatic duplicate prevention when combining domain and tech filters.',
  },
  {
    requirement: 'Instant Catalogue Search',
    structure: 'Pre-Normalized Token Index',
    typescriptSignature: 'ReadonlyMap<ProjectSlug, string>',
    complexity: 'O(1) token retrieval per project',
    rationale: 'Pre-concatenates and lowercases title, problem, stack, and metric tokens once at boot to avoid repeated string allocations.',
  },
  {
    requirement: 'Navigation & Deep Linking',
    structure: 'Static Route Table',
    typescriptSignature: 'Record<RouteId, RouteDefinition>',
    complexity: 'O(1) route resolution',
    rationale: 'Deterministic section scrolling and shareable case-study URLs without unnecessary state bloat.',
  },
];
