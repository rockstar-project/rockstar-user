export class Specification {
  location: string;
  type: string;
  version: string;
}

export class SelectedValue {
  value: string;
  version: string;
}

export class Artifact {
    organization: string;
    namespace: string;
    type: string;
    framework: SelectedValue;
    language: SelectedValue;
    specification: Specification;
    datastore: SelectedValue;
    http: SelectedValue;
    discovery: SelectedValue;
    messaging: SelectedValue;
    tracing: SelectedValue;
    monitoring: SelectedValue;
    security: SelectedValue;
    ci: SelectedValue;
    cd: SelectedValue;
    scm: SelectedValue;
    registry: SelectedValue;
    build: SelectedValue;
    test: SelectedValue;

  }