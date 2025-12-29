import yaml from 'js-yaml';
import fs from 'node:fs';
import path from 'node:path';

// Load CV data from YAML
export function loadCV() {
  const cvPath = path.join(process.cwd(), 'Benjamin_Coveler_CV.yaml');
  const fileContents = fs.readFileSync(cvPath, 'utf8');
  const data = yaml.load(fileContents) as Record<string, any>;
  return data.cv;
}

// Get nested value from object using dot notation
export function getNestedValue(obj: any, path: string): any {
  const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result === undefined || result === null) return undefined;
    result = result[key];
  }
  
  return result;
}

// Load page layout
export function loadPageLayout(pageName: string) {
  const layoutPath = path.join(process.cwd(), 'src/data/pages', `${pageName}.json`);
  const fileContents = fs.readFileSync(layoutPath, 'utf8');
  return JSON.parse(fileContents);
}
