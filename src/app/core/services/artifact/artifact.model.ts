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
    name: string;
    organization: string;
    schema: string;
    architecture: SelectedValue;
    framework: SelectedValue;
    language: SelectedValue;
    specification: SelectedValue;
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