export enum TemplateType {
    Container = 1,
    SwarmStack = 2,
    ComposeStack = 3
}

export type TemplatePlatform = 'linux' | 'windows'

export type RestartPolicy = 'always' | 'no' | 'on-failure' | 'unless-stopped'

export interface TemplateEnvSelectOption {
    text: string
    value: string
    default?: boolean
}

export interface TemplateEnv {
    name: string
    label?: string
    description?: string
    default?: string
    preset?: boolean
    select?: TemplateEnvSelectOption[]
}

export interface TemplateLabel {
    name: string
    value: string
}

export interface TemplateVolume {
    container: string
    bind?: string
    readonly?: boolean
}

export interface ContainerTemplate {
    type: TemplateType.Container
    title: string
    description: string
    image: string
    'administrator-only'?: boolean
    name?: string
    logo?: string
    registry?: string
    command?: string
    env?: TemplateEnv[]
    network?: string
    volumes?: TemplateVolume[]
    ports?: string[]
    labels?: TemplateLabel[]
    privileged?: boolean
    interactive?: boolean
    restart_policy?: RestartPolicy
    hostname?: string
    note?: string
    platform?: TemplatePlatform
    categories?: string[]
}

export interface StackTemplateRepository {
    url: string
    stackfile: string
}

export interface StackTemplate {
    type: TemplateType.SwarmStack | TemplateType.ComposeStack
    title: string
    description: string
    repository: StackTemplateRepository
    administrator_only?: boolean
    name?: string
    logo?: string
    env?: TemplateEnv[]
    note?: string
    platform?: TemplatePlatform
    categories?: string[]
}

export type Template = ContainerTemplate | StackTemplate;