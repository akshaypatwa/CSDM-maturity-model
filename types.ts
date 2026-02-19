export type StageId = 'foundation' | 'crawl' | 'walk' | 'run' | 'fly';
export type ViewMode = 'application' | 'service';

export interface CsdmItem {
  id: string;
  label: string;
  description: string;
}

export interface StageData {
  id: StageId;
  title: string;
  subtitle: string;
  description: string;
  maturity: number; // 0-100
  kpis: { label: string; value: number }[]; // Simulated KPI metrics
  items: {
    application: CsdmItem[];
    service: CsdmItem[];
  };
}
