export interface SystemAgentItem {
  model: string;
  provider: string;
  source: string;
}

export interface UserSystemAgentConfig {
  agentMeta: SystemAgentItem;
  topic: SystemAgentItem;
  translation: SystemAgentItem;
}

export type UserSystemAgentConfigKey = keyof UserSystemAgentConfig;
