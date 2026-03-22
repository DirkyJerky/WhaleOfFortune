// Generated from https://botc.app/backend/data
// echo 'data...' | jq '.roles | [.[] | {id, name, team, edition, ability}]'

export interface Role {
    id: string
    edition: string
    team: string
    name: string
    ability: string
}

const blacklist_character_ids = new Set([
    'drunk',
    'lunatic',
    'marionette',
    'atheist',
    'heretic',
    'pithag',
    'engineer'
])

export const allowed_character_types = [
    'townsfolk',
    'outsider',
    'minion',
    'demon',
    'traveller'
]

export async function fetchRolesData(): Promise<Role[]> {
    try {
        const response = await fetch('https://release.botc.app/resources/data/roles.json');

        if (!response.ok) {
            throw new Error(`Failed to load roles: ${response.statusText}`);
        }

        const data: Role[] = await response.json();

        const filteredData = data.filter((role) => !blacklist_character_ids.has(role.id) && allowed_character_types.includes(role.team))
        return data;
    } catch (error) {
        console.error("Error fetching roles data:", error);
        throw error;
    }
}