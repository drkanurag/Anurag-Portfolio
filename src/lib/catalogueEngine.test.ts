import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  PROJECT_BY_SLUG,
  FEATURED_PROJECTS,
  getProjectBySlug,
  filterProjectsCatalogue,
  SKILLS_BY_DOMAIN,
} from './catalogueEngine.ts';
import { PROJECTS_CATALOGUE } from '../data/portfolioData.ts';

describe('Portfolio Catalogue Engine & Data Structures', () => {
  it('populates PROJECT_BY_SLUG Map for O(1) lookup of all projects', () => {
    assert.equal(PROJECT_BY_SLUG.size, PROJECTS_CATALOGUE.length);
    const roadvision = getProjectBySlug('roadvision-ai');
    assert.ok(roadvision);
    assert.equal(roadvision?.shortTitle, 'RoadVision AI');
    assert.equal(getProjectBySlug('non-existent-slug'), undefined);
  });

  it('maintains the 5 core featured projects in rank order', () => {
    assert.equal(FEATURED_PROJECTS.length, 5);
    assert.deepEqual(
      FEATURED_PROJECTS.map((p) => p.slug),
      [
        'roadvision-ai',
        'datalens-global',
        'rooted-food-platform',
        'blume-research',
        'aether-weather',
      ]
    );
  });

  it('filters projects accurately by domain and Set of tech tags', () => {
    const aiProjects = filterProjectsCatalogue({
      selectedDomain: 'AI & Computer Vision',
    });
    assert.ok(aiProjects.some((p) => p.slug === 'roadvision-ai'));
    assert.ok(aiProjects.some((p) => p.slug === 'blume-research'));

    const tagSet = new Set(['PostgreSQL 18']);
    const pgProjects = filterProjectsCatalogue({
      selectedTechTags: tagSet,
    });
    assert.equal(pgProjects.length, 1);
    assert.equal(pgProjects[0].slug, 'rooted-food-platform');
  });

  it('performs token-based search using NORMALIZED_SEARCH_INDEX', () => {
    const results = filterProjectsCatalogue({
      searchQuery: 'ASTM D6433 WBF',
    });
    assert.equal(results.length, 1);
    assert.equal(results[0].slug, 'roadvision-ai');
  });

  it('groups skills into engineering domains without arbitrary percentage scores', () => {
    assert.equal(SKILLS_BY_DOMAIN.size, 6);
    const backendDomain = SKILLS_BY_DOMAIN.get('backend-enterprise');
    assert.ok(backendDomain);
    assert.ok(backendDomain?.skills.some((s) => s.name.includes('Spring Boot')));
  });
});

