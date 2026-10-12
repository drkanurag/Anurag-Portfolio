import React, { useState } from 'react';
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Database,
  Eye,
  Filter,
  Layers,
  Lock,
  Play,
  Radar,
  RefreshCw,
  Shield,
  Sliders,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';
import { InteractiveDemoType, Project } from '../types/portfolio';

interface InteractiveProjectLabProps {
  demoType: InteractiveDemoType;
  project: Project;
  compact?: boolean;
}

const ROADVISION_SCENARIOS = [
  {
    id: 'nh48-alligator',
    name: 'NH-48 Arterial · Alligator & Pothole Distress',
    inferenceMs: 47.4,
    pciScore: 48,
    pciRating: 'Poor',
    cdvValue: 52.0,
    qCount: 3,
    detections: [
      {
        id: 'det-1',
        code: 'D40',
        label: 'Pothole (Deep Bowl)',
        confidence: 0.94,
        severity: 'High' as const,
        deduct: 34.5,
        blackHatRatio: '28.4%',
        box: { x: 18, y: 52, w: 28, h: 26 },
        color: '#ef4444',
      },
      {
        id: 'det-2',
        code: 'D20',
        label: 'Alligator Crack Mesh',
        confidence: 0.91,
        severity: 'Medium' as const,
        deduct: 22.8,
        blackHatRatio: '19.2%',
        box: { x: 52, y: 48, w: 34, h: 32 },
        color: '#f59e0b',
      },
      {
        id: 'det-3',
        code: 'D00',
        label: 'Longitudinal Wheelpath Crack',
        confidence: 0.86,
        severity: 'Low' as const,
        deduct: 8.4,
        blackHatRatio: '9.1%',
        box: { x: 10, y: 38, w: 24, h: 12 },
        color: '#22d3ee',
      },
    ],
  },
  {
    id: 'monsoon-pothole',
    name: 'Urban Monsoon Corridor · Severe Pothole Cluster',
    inferenceMs: 51.2,
    pciScore: 31,
    pciRating: 'Critical',
    cdvValue: 69.0,
    qCount: 3,
    detections: [
      {
        id: 'det-m1',
        code: 'D40',
        label: 'Primary Delaminated Pothole',
        confidence: 0.96,
        severity: 'High' as const,
        deduct: 46.2,
        blackHatRatio: '34.8%',
        box: { x: 24, y: 46, w: 36, h: 34 },
        color: '#ef4444',
      },
      {
        id: 'det-m2',
        code: 'D40',
        label: 'Secondary Edge Pothole',
        confidence: 0.89,
        severity: 'High' as const,
        deduct: 31.0,
        blackHatRatio: '25.6%',
        box: { x: 64, y: 54, w: 24, h: 24 },
        color: '#ef4444',
      },
      {
        id: 'det-m3',
        code: 'D10',
        label: 'Transverse Joint Fracture',
        confidence: 0.84,
        severity: 'Medium' as const,
        deduct: 14.5,
        blackHatRatio: '14.3%',
        box: { x: 12, y: 36, w: 68, h: 9 },
        color: '#f59e0b',
      },
    ],
  },
  {
    id: 'expressway-fissure',
    name: 'Expressway Sector 14 · Early Surface Fissures',
    inferenceMs: 44.8,
    pciScore: 78,
    pciRating: 'Good',
    cdvValue: 22.0,
    qCount: 2,
    detections: [
      {
        id: 'det-e1',
        code: 'D00',
        label: 'Longitudinal Hairline Crack',
        confidence: 0.92,
        severity: 'Low' as const,
        deduct: 12.5,
        blackHatRatio: '8.7%',
        box: { x: 22, y: 44, w: 18, h: 36 },
        color: '#22d3ee',
      },
      {
        id: 'det-e2',
        code: 'D10',
        label: 'Transverse Thermal Crack',
        confidence: 0.88,
        severity: 'Low' as const,
        deduct: 11.2,
        blackHatRatio: '7.9%',
        box: { x: 46, y: 52, w: 38, h: 10 },
        color: '#22d3ee',
      },
    ],
  },
];

const DATALENS_ROLES = [
  {
    roleId: 'GDF',
    alias: 'GDF001',
    title: 'Global Data Foundation (Executive)',
    scope: 'All 8 Metro Hubs (Global)',
    clsAccess: 'Unmasked Full Compensation & Band Percentiles',
    activeRows: 1240,
    qualityScore: '98.4%',
    avgCtcLpa: '₹24.6 LPA',
    cities: ['Bengaluru', 'Mumbai', 'New Delhi', 'Hyderabad', 'Pune', 'Chennai', 'Kolkata', 'Gurugram'],
    sampleRecords: [
      { empId: 'EMP-1042', city: 'Bengaluru', dept: 'AI Platform', band: 'L6', ctc: '₹34.5 LPA', status: 'Verified' },
      { empId: 'EMP-2089', city: 'Mumbai', dept: 'Risk Analytics', band: 'L5', ctc: '₹26.0 LPA', status: 'Verified' },
      { empId: 'EMP-3114', city: 'Kolkata', dept: 'P&O Operations', band: 'L4', ctc: '₹18.2 LPA', status: 'Auto-Remediated' },
    ],
  },
  {
    roleId: 'HRBP-BLR',
    alias: 'HRBP_BLR',
    title: 'HRBP — Bengaluru Hub',
    scope: 'Locked: Bengaluru Only (RLS Active)',
    clsAccess: 'Site Band & Remediation Scope',
    activeRows: 342,
    qualityScore: '99.1%',
    avgCtcLpa: '₹28.2 LPA',
    cities: ['Bengaluru'],
    sampleRecords: [
      { empId: 'EMP-1042', city: 'Bengaluru', dept: 'AI Platform', band: 'L6', ctc: '₹34.5 LPA', status: 'Verified' },
      { empId: 'EMP-1098', city: 'Bengaluru', dept: 'Cloud Infra', band: 'L5', ctc: '₹25.8 LPA', status: 'Verified' },
      { empId: 'EMP-1140', city: 'Bengaluru', dept: 'Data Science', band: 'L5', ctc: '₹27.4 LPA', status: 'Band Normalized' },
    ],
  },
  {
    roleId: 'HRBP-KOL',
    alias: 'HRBP_KOL',
    title: 'HRBP — Kolkata (MOM / P&O)',
    scope: 'Locked: Kolkata Only (RLS Active)',
    clsAccess: 'Site Band & Remediation Scope',
    activeRows: 128,
    qualityScore: '97.6%',
    avgCtcLpa: '₹17.9 LPA',
    cities: ['Kolkata'],
    sampleRecords: [
      { empId: 'EMP-3114', city: 'Kolkata', dept: 'P&O Operations', band: 'L4', ctc: '₹18.2 LPA', status: 'Auto-Remediated' },
      { empId: 'EMP-3190', city: 'Kolkata', dept: 'Enterprise QA', band: 'L4', ctc: '₹16.8 LPA', status: 'Verified' },
    ],
  },
  {
    roleId: 'HRBP-MUM',
    alias: 'HRBP_MUM',
    title: 'HRBP — Mumbai Hub',
    scope: 'Locked: Mumbai Only (RLS Active)',
    clsAccess: 'Site Band & Remediation Scope',
    activeRows: 215,
    qualityScore: '98.8%',
    avgCtcLpa: '₹25.4 LPA',
    cities: ['Mumbai'],
    sampleRecords: [
      { empId: 'EMP-2089', city: 'Mumbai', dept: 'Risk Analytics', band: 'L5', ctc: '₹26.0 LPA', status: 'Verified' },
      { empId: 'EMP-2145', city: 'Mumbai', dept: 'FinTech API', band: 'L5', ctc: '₹24.8 LPA', status: 'Verified' },
    ],
  },
];

const ROOTED_TABLES = [
  {
    table: 'food_listings',
    normForm: '3NF Core Entity',
    pk: 'listing_id (BIGSERIAL PRIMARY KEY)',
    fk: 'donor_id REFERENCES donors(donor_id) ON DELETE RESTRICT',
    constraints: 'CHECK (quantity_kg > 0 AND expiry_timestamp > created_at)',
    sqlPreview: `SELECT f.category,
       SUM(f.quantity_kg) AS listed_kg,
       COALESCE(SUM(c.claimed_kg) FILTER (WHERE c.status IN ('Completed','Collected')), 0) AS recovered_kg,
       ROUND(100.0 * COALESCE(SUM(c.claimed_kg) FILTER (WHERE c.status IN ('Completed','Collected')), 0) / SUM(f.quantity_kg), 1) AS diversion_pct
FROM food_listings f
LEFT JOIN claims c ON f.listing_id = c.listing_id
GROUP BY f.category;`,
  },
  {
    table: 'claims',
    normForm: '3NF Transactional Ledger',
    pk: 'claim_id (BIGSERIAL PRIMARY KEY)',
    fk: 'listing_id REFERENCES food_listings(listing_id), recipient_id REFERENCES recipients(recipient_id)',
    constraints: "CHECK (claimed_kg > 0 AND status IN ('Pending','Approved','Collected','Completed','Cancelled'))",
    sqlPreview: `INSERT INTO claims (listing_id, recipient_id, claimed_kg, status, pickup_window)
VALUES (1048, 22, 38.5, 'Collected', NOW() + INTERVAL '90 minutes')
RETURNING claim_id, status, claimed_kg;`,
  },
  {
    table: 'donors & recipients',
    normForm: '3NF Master Entities',
    pk: 'donor_id / recipient_id (SERIAL PRIMARY KEY)',
    fk: 'Referenced by listings & claims (eliminates transitive location/contact duplication)',
    constraints: 'UNIQUE (organization_email), NOT NULL verified_fssai_code',
    sqlPreview: `SELECT d.org_name, COUNT(f.listing_id) AS total_batches, SUM(f.quantity_kg) AS total_donated_kg
FROM donors d
JOIN food_listings f ON d.donor_id = f.donor_id
GROUP BY d.donor_id, d.org_name
ORDER BY total_donated_kg DESC LIMIT 5;`,
  },
];

const AETHER_CITIES = [
  {
    city: 'Manipal, IN',
    coords: '13.3525° N, 74.7928° E',
    tempC: 29.4,
    rhPct: 76,
    dewPointC: 24.7,
    wetBulbC: 26.1,
    aqi: 42,
    regime: 'Warm Coastal Monsoon · High Latent Humidity',
  },
  {
    city: 'New Delhi, IN',
    coords: '28.6139° N, 77.2090° E',
    tempC: 34.2,
    rhPct: 41,
    dewPointC: 19.1,
    wetBulbC: 23.4,
    aqi: 138,
    regime: 'Semi-Arid Continental · Moderate AQI Advisory',
  },
  {
    city: 'Bengaluru, IN',
    coords: '12.9716° N, 77.5946° E',
    tempC: 25.8,
    rhPct: 62,
    dewPointC: 17.9,
    wetBulbC: 20.5,
    aqi: 54,
    regime: 'Deccan Plateau Temperate · Optimal Outdoor Index',
  },
  {
    city: 'Pune, IN',
    coords: '18.5204° N, 73.8567° E',
    tempC: 27.6,
    rhPct: 55,
    dewPointC: 17.7,
    wetBulbC: 20.9,
    aqi: 61,
    regime: 'Leeward Western Ghats · Clear Visibility',
  },
];

export const InteractiveProjectLab: React.FC<InteractiveProjectLabProps> = ({
  demoType,
  project,
  compact = false,
}) => {
  // RoadVision state
  const [rvScenarioIdx, setRvScenarioIdx] = useState(0);
  const [rvSplitPos, setRvSplitPos] = useState(78);
  const [rvShowBoxes, setRvShowBoxes] = useState(true);
  const [rvShowBlackHat, setRvShowBlackHat] = useState(true);

  // DataLens state
  const [dlRoleIdx, setDlRoleIdx] = useState(0);

  // Rooted state
  const [rtTableIdx, setRtTableIdx] = useState(0);
  const [rtSimulatedBatches, setRtSimulatedBatches] = useState(0);

  // BLUME state
  const [blMetricKey, setBlMetricKey] = useState<'mAP50' | 'precision' | 'mAP50_95' | 'fpsCpuOrEdge'>('mAP50');

  // AETHER state
  const [aeCityIdx, setAeCityIdx] = useState(0);
  const [aeSimMode, setAeSimMode] = useState<'live' | 'cache-hit' | 'boundary-error'>('cache-hit');
  const [aeCacheHits, setAeCacheHits] = useState(14);

  if (demoType === 'roadvision-inspector') {
    const scenario = ROADVISION_SCENARIOS[rvScenarioIdx];
    const pciColor =
      scenario.pciScore >= 70
        ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
        : scenario.pciScore >= 40
        ? 'text-amber-400 border-amber-500/30 bg-amber-500/10'
        : 'text-rose-400 border-rose-500/30 bg-rose-500/10';

    return (
      <div className="rounded-xl border border-slate-800/90 bg-[#070b14] p-4 sm:p-5 shadow-inner">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-semibold">
              Interactive AI Lab · RoadVision WBF Ensemble + ASTM D6433 Inspector
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {ROADVISION_SCENARIOS.map((sc, idx) => (
              <button
                key={sc.id}
                type="button"
                onClick={() => setRvScenarioIdx(idx)}
                className={`px-2.5 py-1 rounded-md font-mono text-xs transition-colors ${
                  rvScenarioIdx === idx
                    ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400/50'
                    : 'bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                Sample 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Interactive Visual Pavement Viewport */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-lg border border-slate-800 bg-[#0b1120] p-3 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2 z-10">
              <span className="font-mono text-xs text-slate-300 truncate">{scenario.name}</span>
              <span className="font-mono text-[11px] text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded">
                ONNX CPU: {scenario.inferenceMs} ms
              </span>
            </div>

            {/* Simulated Roadway Surface + Split Screen Comparator */}
            <div className="relative h-52 sm:h-60 w-full rounded-lg overflow-hidden border border-slate-800 select-none bg-gradient-to-b from-slate-900 via-[#151d2e] to-[#111827]">
              {/* Perspective Horizon Grid & Road Lane */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 220" preserveAspectRatio="none">
                <defs>
                  <pattern id="asphaltGrain" width="8" height="8" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="0.7" fill="rgba(148,163,184,0.12)" />
                    <circle cx="6" cy="5" r="0.9" fill="rgba(71,85,105,0.16)" />
                  </pattern>
                </defs>
                {/* Sky / Horizon */}
                <rect x="0" y="0" width="400" height="52" fill="#060a12" />
                <line x1="0" y1="52" x2="400" y2="52" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                <text x="10" y="45" fill="#64748b" fontSize="8" fontFamily="monospace">
                  PERSPECTIVE HORIZON FILTER (SUPPRESSES SKY/TREES)
                </text>
                {/* Trapezoid Roadway */}
                <polygon points="110,52 290,52 395,220 5,220" fill="#161f30" />
                <polygon points="110,52 290,52 395,220 5,220" fill="url(#asphaltGrain)" />
                {/* Lane Markings */}
                <line x1="115" y1="52" x2="18" y2="220" stroke="#475569" strokeWidth="2" />
                <line x1="285" y1="52" x2="382" y2="220" stroke="#475569" strokeWidth="2" />
                <line x1="200" y1="56" x2="200" y2="220" stroke="#eab308" strokeWidth="2" strokeDasharray="12 10" strokeOpacity="0.65" />

                {/* Physical Road Cracks / Pothole Shapes */}
                {scenario.detections.map((d) => {
                  const cx = (d.box.x + d.box.w / 2) * 4;
                  const cy = (d.box.y + d.box.h / 2) * 2.2;
                  return (
                    <g key={`raw-${d.id}`}>
                      {d.code === 'D40' ? (
                        <ellipse
                          cx={cx}
                          cy={cy}
                          rx={d.box.w * 1.4}
                          ry={d.box.h * 0.75}
                          fill="#090d16"
                          stroke="#334155"
                          strokeWidth="2"
                        />
                      ) : (
                        <path
                          d={`M ${d.box.x * 4} ${d.box.y * 2.2 + 8} Q ${cx} ${cy - 8}, ${(d.box.x + d.box.w) * 4} ${(d.box.y + d.box.h) * 2.2 - 4}`}
                          stroke="#090d16"
                          strokeWidth="3"
                          fill="none"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Forensic WBF Overlay Clipped by Split Slider */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - rvSplitPos}% 0 0)` }}
              >
                {scenario.detections.map((det) => (
                  <div
                    key={det.id}
                    style={{
                      left: `${det.box.x}%`,
                      top: `${det.box.y}%`,
                      width: `${det.box.w}%`,
                      height: `${det.box.h}%`,
                      borderColor: rvShowBoxes ? det.color : 'transparent',
                    }}
                    className={`absolute rounded transition-all ${
                      rvShowBoxes ? 'border-2 bg-slate-950/25' : ''
                    }`}
                  >
                    {rvShowBlackHat && (
                      <div
                        className="absolute inset-1 rounded-sm opacity-45"
                        style={{
                          backgroundImage: `radial-gradient(${det.color} 1.25px, transparent 1.25px)`,
                          backgroundSize: '6px 6px',
                        }}
                      />
                    )}
                    {rvShowBoxes && (
                      <div
                        style={{ backgroundColor: det.color }}
                        className="absolute -top-5 left-0 px-1.5 py-0.5 rounded-t text-[10px] font-mono font-bold text-slate-950 whitespace-nowrap shadow"
                      >
                        {det.code} · {(det.confidence * 100).toFixed(0)}% · {det.severity}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Split Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-cyan-400 shadow-[0_0_10px_#22d3ee] pointer-events-none"
                style={{ left: `${rvSplitPos}%` }}
              >
                <div className="absolute top-2 -left-14 bg-slate-950/90 border border-cyan-500/40 px-1.5 py-0.5 rounded text-[9px] font-mono text-cyan-300">
                  WBF AI
                </div>
                <div className="absolute top-2 left-2 bg-slate-950/90 border border-slate-700 px-1.5 py-0.5 rounded text-[9px] font-mono text-slate-400">
                  RAW
                </div>
              </div>
            </div>

            {/* Interactive Controls Bar */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2 flex-1 min-w-[180px]">
                <Sliders className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="font-mono text-[11px] text-slate-400">Compare Split:</span>
                <input
                  type="range"
                  aria-label="RoadVision AI before and after comparison slider"
                  min={5}
                  max={95}
                  value={rvSplitPos}
                  onChange={(e) => setRvSplitPos(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
                <span className="font-mono text-[11px] text-cyan-300 w-9 text-right">{rvSplitPos}%</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setRvShowBoxes((v) => !v)}
                  className={`px-2 py-1 rounded text-[11px] font-mono border transition ${
                    rvShowBoxes
                      ? 'bg-indigo-500/20 border-indigo-400/50 text-indigo-200'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  {rvShowBoxes ? '✓ WBF Boxes' : '○ WBF Boxes'}
                </button>
                <button
                  type="button"
                  onClick={() => setRvShowBlackHat((v) => !v)}
                  className={`px-2 py-1 rounded text-[11px] font-mono border transition ${
                    rvShowBlackHat
                      ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-200'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  {rvShowBlackHat ? '✓ Black-Hat Mask' : '○ Black-Hat Mask'}
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel: ASTM D6433 Severity & Road Health Telemetry */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-lg border border-slate-800 bg-[#0b1120] p-3.5">
            <div>
              <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-slate-800">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    ASTM D6433 Pavement Condition Index
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Non-linear CDV Deduct Curve ($q = {scenario.qCount}$)
                  </div>
                </div>
                <div className={`px-3 py-1.5 rounded-lg border font-mono text-right ${pciColor}`}>
                  <div className="text-lg font-bold leading-none">PCI {scenario.pciScore}</div>
                  <div className="text-[10px] uppercase tracking-wider mt-0.5">{scenario.pciRating}</div>
                </div>
              </div>

              <div className="space-y-2">
                {scenario.detections.map((det) => (
                  <div
                    key={det.id}
                    className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/90 flex items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className="inline-block w-2 h-2 rounded-full"
                          style={{ backgroundColor: det.color }}
                        />
                        <span className="font-mono text-xs font-semibold text-slate-200">
                          {det.code} · {det.label}
                        </span>
                      </div>
                      <div className="font-mono text-[11px] text-slate-400 mt-0.5">
                        WBF Conf: {(det.confidence * 100).toFixed(0)}% · Black-Hat Fissure: {det.blackHatRatio}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                          det.severity === 'High'
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                            : det.severity === 'Medium'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        }`}
                      >
                        {det.severity} (-{det.deduct})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Ensemble: India-Specialist + Global YOLOv8n</span>
              <span className="text-emerald-400">CDV: -{scenario.cdvValue} pts</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (demoType === 'datalens-governance') {
    const role = DATALENS_ROLES[dlRoleIdx];
    return (
      <div className="rounded-xl border border-slate-800/90 bg-[#070b14] p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-indigo-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-indigo-300 font-semibold">
              Interactive Governance Simulator · RLS & CLS Role Perimeter
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {DATALENS_ROLES.map((r, idx) => (
              <button
                key={r.roleId}
                type="button"
                onClick={() => setDlRoleIdx(idx)}
                className={`px-2.5 py-1 rounded-md font-mono text-xs transition-colors ${
                  dlRoleIdx === idx
                    ? 'bg-indigo-500/25 text-indigo-200 border border-indigo-400/50'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                {r.roleId}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-5 rounded-lg border border-slate-800 bg-[#0b1120] p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-indigo-400 font-semibold">{role.title}</span>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  Alias: {role.alias}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-2 font-mono">{role.scope}</p>

              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400">Visible Rows</div>
                  <div className="text-sm font-mono font-bold text-white mt-0.5">{role.activeRows}</div>
                </div>
                <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400">Scoped Mean</div>
                  <div className="text-sm font-mono font-bold text-emerald-400 mt-0.5">{role.avgCtcLpa}</div>
                </div>
                <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400">Data Quality</div>
                  <div className="text-sm font-mono font-bold text-cyan-400 mt-0.5">{role.qualityScore}</div>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-800/80">
              <div className="text-[11px] font-mono text-slate-400 mb-1.5">Authorized Metro Perimeters:</div>
              <div className="flex flex-wrap gap-1">
                {['Bengaluru', 'Mumbai', 'New Delhi', 'Hyderabad', 'Pune', 'Chennai', 'Kolkata', 'Gurugram'].map(
                  (city) => {
                    const allowed = role.cities.includes(city);
                    return (
                      <span
                        key={city}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                          allowed
                            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                            : 'bg-slate-950 border-slate-800/70 text-slate-600 line-through'
                        }`}
                      >
                        {city}
                      </span>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-lg border border-slate-800 bg-[#0b1120] p-3.5 overflow-x-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-slate-300">
                RLS-Filtered Partition Preview & Quality Remediation Stream
              </span>
              <span className="font-mono text-[11px] text-emerald-400">CLS Policy: Verified</span>
            </div>
            <table className="w-full text-left border-collapse font-mono text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-[11px]">
                  <th className="py-1.5 pr-2">Emp ID</th>
                  <th className="py-1.5 pr-2">Metro Hub</th>
                  <th className="py-1.5 pr-2">Band</th>
                  <th className="py-1.5 pr-2">Comp (CLS)</th>
                  <th className="py-1.5">Quality State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {role.sampleRecords.map((rec) => (
                  <tr key={rec.empId} className="text-slate-200">
                    <td className="py-2 pr-2 text-indigo-300">{rec.empId}</td>
                    <td className="py-2 pr-2">{rec.city}</td>
                    <td className="py-2 pr-2">{rec.band}</td>
                    <td className="py-2 pr-2 text-emerald-300">{rec.ctc}</td>
                    <td className="py-2">
                      <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-cyan-300">
                        {rec.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex flex-wrap items-center justify-between gap-2">
              <span>6-Service Mesh: Gateway → RBAC Guard → Quality → Analytics → Audit</span>
              <span className="text-indigo-300">Zero Cross-Site Leakage</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (demoType === 'rooted-schema-kpi') {
    const activeTable = ROOTED_TABLES[rtTableIdx];
    const currentDiversion = Math.min(75.0, +(64.2 + rtSimulatedBatches * 2.7).toFixed(1));
    return (
      <div className="rounded-xl border border-slate-800/90 bg-[#070b14] p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
              PostgreSQL 18 3NF Schema & Food Diversion KPI Simulator
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {ROOTED_TABLES.map((t, idx) => (
              <button
                key={t.table}
                type="button"
                onClick={() => setRtTableIdx(idx)}
                className={`px-2.5 py-1 rounded-md font-mono text-xs transition-colors ${
                  rtTableIdx === idx
                    ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-400/50'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                {t.table}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7 rounded-lg border border-slate-800 bg-[#0b1120] p-3.5">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="font-mono text-xs font-semibold text-emerald-300">
                Table: {activeTable.table} ({activeTable.normForm})
              </span>
              <span className="font-mono text-[11px] text-slate-400">ACID Transactional</span>
            </div>
            <div className="space-y-1 text-xs font-mono text-slate-300 mb-3">
              <div>
                <span className="text-slate-500">PK: </span>
                <span className="text-cyan-300">{activeTable.pk}</span>
              </div>
              <div>
                <span className="text-slate-500">FK: </span>
                <span className="text-indigo-300">{activeTable.fk}</span>
              </div>
              <div>
                <span className="text-slate-500">Constraint: </span>
                <span className="text-amber-300">{activeTable.constraints}</span>
              </div>
            </div>
            <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800/90 text-[11px] font-mono text-emerald-200 overflow-x-auto leading-relaxed">
              {activeTable.sqlPreview}
            </pre>
          </div>

          <div className="lg:col-span-5 rounded-lg border border-slate-800 bg-[#0b1120] p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-slate-300">Executive KPI: Food Diversion Rate</span>
                <span className="font-mono text-xs font-bold text-emerald-400">
                  {currentDiversion}% / 75.0% Target
                </span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-900 border border-slate-800 overflow-hidden mb-3">
                <div
                  className="h-full bg-gradient-to-r from-emerald-600 to-cyan-400 transition-all duration-300"
                  style={{ width: `${(currentDiversion / 75) * 100}%` }}
                />
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-slate-400">Baseline Diversion:</span>
                  <span className="text-slate-200">45.0%</span>
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span className="text-slate-400">Simulated NGO Pickups:</span>
                  <span className="text-emerald-300">+{rtSimulatedBatches} Verified Batches</span>
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span className="text-slate-400">Implementation Transparency:</span>
                  <span className="text-amber-300">3NF Live · Auto-Match Planned</span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setRtSimulatedBatches((b) => (b < 4 ? b + 1 : 0))}
                className="px-3 py-1.5 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-200 font-mono text-xs transition"
              >
                {rtSimulatedBatches < 4 ? '+ Simulate NGO Claim & Pickup' : '↺ Reset KPI Simulation'}
              </button>
              <span className="font-mono text-[11px] text-slate-400">PostgreSQL 18</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (demoType === 'blume-benchmark') {
    const benchmarks = [
      { name: 'SSD MobileNet v2 (BLUME Core)', mAP50: 85.1, precision: 88.5, mAP50_95: 61.8, fpsCpuOrEdge: 31, highlight: true },
      { name: 'YOLO Single-Stage Detector', mAP50: 83.5, precision: 86.2, mAP50_95: 59.4, fpsCpuOrEdge: 24, highlight: false },
      { name: 'Custom Multi-Layer CNN', mAP50: 72.4, precision: 78.6, mAP50_95: 48.5, fpsCpuOrEdge: 14, highlight: false },
      { name: 'Haar Cascade Baseline', mAP50: 51.2, precision: 58.4, mAP50_95: 29.8, fpsCpuOrEdge: 38, highlight: false },
    ];
    const metricLabels = {
      mAP50: { label: 'mAP@0.5 (%)', unit: '%', max: 100 },
      precision: { label: 'Precision (%)', unit: '%', max: 100 },
      mAP50_95: { label: 'mAP@0.5:0.95 (%)', unit: '%', max: 100 },
      fpsCpuOrEdge: { label: 'Real-Time Throughput (FPS)', unit: ' FPS', max: 45 },
    };
    const activeMeta = metricLabels[blMetricKey];

    return (
      <div className="rounded-xl border border-slate-800/90 bg-[#070b14] p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <Radar className="w-4 h-4 text-violet-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-violet-300 font-semibold">
              Published Research Benchmark · IJCRT2305259 (600-Image Weapon & Anomaly Corpus)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {(Object.keys(metricLabels) as Array<keyof typeof metricLabels>).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setBlMetricKey(k)}
                className={`px-2.5 py-1 rounded-md font-mono text-xs transition-colors ${
                  blMetricKey === k
                    ? 'bg-violet-500/25 text-violet-200 border border-violet-400/50'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                {metricLabels[k].label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {benchmarks.map((row) => {
            const val = row[blMetricKey];
            const pct = Math.min(100, (val / activeMeta.max) * 100);
            return (
              <div
                key={row.name}
                className={`p-3 rounded-lg border ${
                  row.highlight
                    ? 'bg-violet-950/20 border-violet-500/40'
                    : 'bg-[#0b1120] border-slate-800/90'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className={row.highlight ? 'text-violet-200 font-bold' : 'text-slate-300'}>
                    {row.name}
                  </span>
                  <span className={row.highlight ? 'text-cyan-300 font-bold' : 'text-slate-400'}>
                    {val}
                    {activeMeta.unit}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      row.highlight
                        ? 'bg-gradient-to-r from-violet-500 to-cyan-400'
                        : 'bg-slate-600'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (demoType === 'aether-dsa-lab') {
    const city = AETHER_CITIES[aeCityIdx];
    return (
      <div className="rounded-xl border border-slate-800/90 bg-[#070b14] p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-amber-300 font-semibold">
              AETHER Client DSA (O(1) LRU Cache + KD-Tree) & Psychrometric Telemetry
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {AETHER_CITIES.map((c, idx) => (
              <button
                key={c.city}
                type="button"
                onClick={() => {
                  setAeCityIdx(idx);
                  setAeCacheHits((h) => h + 1);
                  setAeSimMode('cache-hit');
                }}
                className={`px-2.5 py-1 rounded-md font-mono text-xs transition-colors ${
                  aeCityIdx === idx
                    ? 'bg-amber-500/20 text-amber-200 border border-amber-400/50'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                {c.city}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7 rounded-lg border border-slate-800 bg-[#0b1120] p-3.5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-sm font-semibold text-white">{city.city}</div>
                <div className="text-[11px] font-mono text-slate-400">{city.coords} · {city.regime}</div>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/15 border border-emerald-500/30 font-mono text-xs text-emerald-300">
                LRU Hits: {aeCacheHits} (O(1))
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">Dry-Bulb Temp</div>
                <div className="text-base font-mono font-bold text-white mt-0.5">{city.tempC}°C</div>
              </div>
              <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">Stull Wet-Bulb ($T_w$)</div>
                <div className="text-base font-mono font-bold text-cyan-300 mt-0.5">{city.wetBulbC}°C</div>
              </div>
              <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">Magnus Dew Point</div>
                <div className="text-base font-mono font-bold text-indigo-300 mt-0.5">{city.dewPointC}°C</div>
              </div>
              <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">US AQI Index</div>
                <div className="text-base font-mono font-bold text-amber-300 mt-0.5">{city.aqi}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-lg border border-slate-800 bg-[#0b1120] p-3.5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-slate-300 mb-2">
                Test UI Resilience & Error Boundary States:
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                <button
                  type="button"
                  onClick={() => setAeSimMode('cache-hit')}
                  className={`px-2 py-1 rounded text-[11px] font-mono border ${
                    aeSimMode === 'cache-hit'
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-200'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  O(1) LRU Hit
                </button>
                <button
                  type="button"
                  onClick={() => setAeSimMode('live')}
                  className={`px-2 py-1 rounded text-[11px] font-mono border ${
                    aeSimMode === 'live'
                      ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-200'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  Open-Meteo NWP
                </button>
                <button
                  type="button"
                  onClick={() => setAeSimMode('boundary-error')}
                  className={`px-2 py-1 rounded text-[11px] font-mono border ${
                    aeSimMode === 'boundary-error'
                      ? 'bg-rose-500/20 border-rose-500/40 text-rose-200'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  HTTP 400 Guard
                </button>
              </div>

              <div className="p-2.5 rounded bg-slate-950 border border-slate-800 font-mono text-[11px]">
                {aeSimMode === 'cache-hit' && (
                  <span className="text-emerald-300">
                    [200 CACHE_HIT] Resolved {city.city} from Doubly-Linked LRU Map in 0.02ms. PrefixSum1D ready.
                  </span>
                )}
                {aeSimMode === 'live' && (
                  <span className="text-cyan-300">
                    [200 NWP_LIVE] Fetched 24H + 14D forecast via /api/v1/forecast token-bucket gateway.
                  </span>
                )}
                {aeSimMode === 'boundary-error' && (
                  <span className="text-rose-300">
                    [400 DATE_OUT_OF_RANGE] Explicit boundary guard: Dates prior to 1950-01-01 (ERA5 limit) rejected gracefully.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default architecture flow preview for other projects
  return (
    <div className="rounded-xl border border-slate-800/90 bg-[#070b14] p-4">
      <div className="text-xs font-mono text-slate-400 mb-3">
        System Architecture: <span className="text-slate-200">{project.caseStudy.architecture.patternName}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {project.caseStudy.architecture.nodes.map((node) => (
          <div key={node.id} className="p-3 rounded-lg bg-[#0b1120] border border-slate-800">
            <div className="font-mono text-xs font-semibold text-indigo-300">{node.label}</div>
            <div className="text-[11px] text-slate-400 mt-1">{node.sublabel}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

