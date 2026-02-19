import { StageData } from './types';
import { Database, Footprints, Route, Zap, Rocket } from 'lucide-react';

export const STAGES: StageData[] = [
  {
    id: 'foundation',
    title: 'Foundation',
    subtitle: 'Establishing Core Data',
    description: 'The bedrock of CSDM. Focusing on accurate referencing of core data and reporting requirements before moving to complex relationships.',
    maturity: 15,
    kpis: [
      { label: 'Data Accuracy', value: 85 },
      { label: 'Referential Integrity', value: 90 },
      { label: 'Visibility', value: 20 },
    ],
    items: {
      application: [
        { id: 'app-rep', label: 'Reporting Requirements', description: 'Defining what needs to be measured.' },
        { id: 'app-core', label: 'Core Data', description: 'Foundation data referenced by applications.' },
      ],
      service: [
        { id: 'svc-core', label: 'Core Data', description: 'Foundation data like Companies & Departments.' },
        { id: 'svc-users', label: 'Users', description: 'Identity management integration.' },
        { id: 'svc-groups', label: 'Groups', description: 'Assignment and approval groups.' },
        { id: 'svc-loc', label: 'Locations', description: 'Physical and logical locations.' },
      ],
    },
  },
  {
    id: 'crawl',
    title: 'Crawl',
    subtitle: 'Identifying Applications',
    description: 'Cataloging what you have. Creating the inventory of applications and services to begin basic management and ownership.',
    maturity: 35,
    kpis: [
      { label: 'Inventory Coverage', value: 60 },
      { label: 'Ownership Assigned', value: 50 },
      { label: 'Visibility', value: 45 },
    ],
    items: {
      application: [
        { id: 'app-ba', label: 'Business Application', description: 'Inventory of software used for business capabilities.' },
        { id: 'app-sdlc', label: 'SDLC Component', description: 'DevOps representation of the app.' },
        { id: 'app-svcs', label: 'Application Services', description: 'Logical representation of a deployed application stack.' },
        { id: 'app-disc', label: 'Discoverable Parts', description: 'Infrastructure configuration items.' },
      ],
      service: [
        { id: 'svc-bs', label: 'Business Services', description: 'Services consumed by business users.' },
        { id: 'svc-ts', label: 'Technical Services', description: 'Services consumed by technical teams.' },
        { id: 'svc-off', label: 'Service Offerings', description: 'Specific options of a service.' },
        { id: 'svc-as', label: 'Application Services', description: 'Logical instances of services.' },
      ],
    },
  },
  {
    id: 'walk',
    title: 'Walk',
    subtitle: 'Connecting Infrastructure',
    description: 'Mapping the physical world to logical services. Moving from inventory to operational visibility and impact analysis.',
    maturity: 60,
    kpis: [
      { label: 'Impact Analysis', value: 75 },
      { label: 'MTTR Reduction', value: 40 },
      { label: 'Visibility', value: 70 },
    ],
    items: {
      application: [
        { id: 'app-dcg', label: 'Dynamic CI Group', description: 'Automated grouping of CIs based on queries.' },
        { id: 'app-tso', label: 'Tech Service Offering', description: 'Support variants for technology.' },
        { id: 'app-ts', label: 'Technical Service', description: 'Underlying technology services.' },
        { id: 'app-port', label: 'Service Portfolio', description: 'Collection of services managed together.' },
      ],
      service: [
        { id: 'svc-disc', label: 'Discoverable CIs', description: 'Servers, Network Gear, IoT.' },
        { id: 'svc-map', label: 'Map CIs to Services', description: 'Service Mapping & Relationships.' },
        { id: 'svc-dcg', label: 'Dynamic CI Groups', description: 'Query-based CI management.' },
      ],
    },
  },
  {
    id: 'run',
    title: 'Run',
    subtitle: 'Business Context',
    description: 'Adding business context to technology. Understanding who consumes services and managing the full lifecycle.',
    maturity: 80,
    kpis: [
      { label: 'SLA Adherence', value: 90 },
      { label: 'Cost Allocation', value: 65 },
      { label: 'Visibility', value: 90 },
    ],
    items: {
      application: [
        { id: 'app-bso', label: 'Business Service Offering', description: 'Specific service options for business users.' },
        { id: 'app-bs', label: 'Business Service', description: 'Services supporting business capabilities.' },
      ],
      service: [
        { id: 'svc-ba', label: 'Business Application', description: 'Strategic view of software assets.' },
        { id: 'svc-sdlc', label: 'SDLC Component', description: 'Development lifecycle objects.' },
      ],
    },
  },
  {
    id: 'fly',
    title: 'Fly',
    subtitle: 'Strategic Intelligence',
    description: 'Full strategic alignment. Connecting investments to capabilities, optimizing portfolios, and enabling digital transformation.',
    maturity: 100,
    kpis: [
      { label: 'Strategic Alignment', value: 95 },
      { label: 'Portfolio Opt.', value: 92 },
      { label: 'Visibility', value: 100 },
    ],
    items: {
      application: [
        { id: 'app-cap', label: 'Business Capability', description: 'What the business does.' },
        { id: 'app-info', label: 'Information Object', description: 'Data domains and sensitivity.' },
        { id: 'app-cat', label: 'Catalog Items', description: 'Requestable items in the portal.' },
        { id: 'app-port', label: 'Application Portfolio', description: 'Strategic management of app landscape.' },
      ],
      service: [
        { id: 'svc-cap', label: 'Business Capability', description: 'High-level business abilities.' },
        { id: 'svc-info', label: 'Information Object', description: 'Data assets managed.' },
        { id: 'svc-cat', label: 'Catalog Items', description: 'Service catalog entries.' },
        { id: 'svc-dig', label: 'Digital Portfolio', description: 'Unified view of digital assets.' },
      ],
    },
  },
];

export const STAGE_ICONS = {
  foundation: Database,
  crawl: Footprints,
  walk: Route,
  run: Zap,
  fly: Rocket,
};
