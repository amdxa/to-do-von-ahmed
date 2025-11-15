export interface Todo {
    id: number;
    title: string;
    description?: string;
    status: 'offen' | 'in_bearbeitung' | 'erledigt';
}