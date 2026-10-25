import {
  PROJECTS_CATALOGUE,
  SKILL_CATEGORIES,
} from '../data/portfolioData.ts';
import type {
  Project,
  ProjectDomain,
  ProjectSlug,
  SkillCategory,
  SkillDomainId,
} from '../types/portfolio.ts';

/**
 * 1. O(1) Average-Time Project Lookup Map keyed by ProjectSlug.
 * Built once at module initialization.
 */
export const PROJECT_BY_SLUG: ReadonlyMap<ProjectSlug, Project> = new Map(
  PROJECTS_CATALOGUE.map((project) => [project.slug, project])
);

/**
 * 2. O(1) Average-Time Skill Category Map keyed by SkillDomainId.
 */
export const SKILLS_BY_DOMAIN: ReadonlyMap<SkillDomainId, SkillCategory> = new Map(
  SKILL_CATEGORIES.map((category) => [category.id, category])
);

/**
 * 3. Pre-normalized searchable corpus index keyed by ProjectSlug.
 * Avoids repeated string concatenation and lowercasing on every keystroke.
 */
export const NORMALIZED_SEARCH_INDEX: ReadonlyMap<ProjectSlug, string> = new Map(
  PROJECTS_CATALOGUE.map((project) => {
    const searchableBlob = [
      project.title,
      project.shortTitle,
      project.subtitle,
      project.tagline,
      project.primaryDomain,
      ...project.domains,
      ...project.tags,
      project.caseStudy.problem.headline,
      project.caseStudy.solution.headline,
      ...project.caseStudy.technologyDecisions.map((t) => t.technology),
      ...project.heroMetrics.map((m) => `${m.label} ${m.value}`),
    ]
      .join(' ')
      .toLowerCase()
      .trim();

    return [project.slug, searchableBlob];
  })
);

/**
 * 4. Distinct Set of all domain filters and technology tags.
 */
export const ALL_PROJECT_DOMAINS: readonly ProjectDomain[] = [
  'AI & Computer Vision',
  'Data & Analytics',
  'Backend & Microservices',
  'Frontend & Web UX',
  'Published Research',
];

export const FEATURED_PROJECTS: readonly Project[] = PROJECTS_CATALOGUE.filter(
  (project) => project.featured
);

/**
 * O(1) lookup helper using PROJECT_BY_SLUG Map.
 */
export function getProjectBySlug(slug: string | null | undefined): Project | undefined {
  if (!slug) return undefined;
  return PROJECT_BY_SLUG.get(slug as ProjectSlug);
}

/**
 * Filters the project catalogue using Set-based tag/domain membership and
 * pre-normalized search tokens.
 */
export function filterProjectsCatalogue(options: {
  selectedDomain?: ProjectDomain | 'All';
  selectedTechTags?: ReadonlySet<string>;
  searchQuery?: string;
  onlyFeatured?: boolean;
}): Project[] {
  const {
    selectedDomain = 'All',
    selectedTechTags,
    searchQuery = '',
    onlyFeatured = false,
  } = options;

  const normalizedQuery = searchQuery.toLowerCase().trim();
  const queryTokens = normalizedQuery ? normalizedQuery.split(/\s+/) : [];

  return PROJECTS_CATALOGUE.filter((project) => {
    if (onlyFeatured && !project.featured) {
      return false;
    }

    if (selectedDomain !== 'All') {
      const domainSet = new Set<ProjectDomain>(project.domains);
      if (!domainSet.has(selectedDomain)) {
        return false;
      }
    }

    if (selectedTechTags && selectedTechTags.size > 0) {
      const projectTagSet = new Set(project.tags.map((t) => t.toLowerCase()));
      for (const requiredTag of selectedTechTags) {
        if (!projectTagSet.has(requiredTag.toLowerCase())) {
          return false;
        }
      }
    }

    if (queryTokens.length > 0) {
      const indexedText = NORMALIZED_SEARCH_INDEX.get(project.slug) ?? '';
      for (const token of queryTokens) {
        if (!indexedText.includes(token)) {
          return false;
        }
      }
    }

    return true;
  });
}

/**
 * Static Navigation Route Definitions
 */
export interface NavRouteDefinition {
  id: string;
  number: string;
  label: string;
  href: string;
}

export const STATIC_NAV_ROUTES: readonly NavRouteDefinition[] = [
  { id: 'hero', number: '01', label: 'ABOUT', href: '#hero' },
  { id: 'projects', number: '02', label: 'PROJECTS', href: '#projects' },
  { id: 'skills', number: '03', label: 'SKILLS', href: '#skills' },
  { id: 'experience', number: '04', label: 'EXPERIENCE', href: '#experience' },
  { id: 'research', number: '05', label: 'RESEARCH', href: '#research' },
  { id: 'contact', number: '06', label: 'CONTACT', href: '#contact' },
];
