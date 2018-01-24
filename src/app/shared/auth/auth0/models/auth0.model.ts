export class Identity {
    provider: string;
    user_id: string;
}

export class AppMetadata {
    organization: string;
    role: string;
}

export class UserMetadata {
    picture: string;
    name: string;
    skills: string;
}

export class UserProfile {
    user_id: string;
    name: string;
    picture: string;
    nickname: string;
    email: string;
    clientID: string;
    repos_url: string;
    identities: Identity[];
    user_metadata: UserMetadata;
    app_metadata: AppMetadata;
}

interface AuthConfig {
    clientID: string;
    domain: string;
    redirect: string;
    audience: string;
    scope: string;
}