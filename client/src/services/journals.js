import client from './client';

export function getJournals(id=null) {
  if (id) return client.get(`/journals/${id}`);
  return client.get('/journals')
}

export function createJournal(journal={}) {
  return client.post('/journals', journal);
}

export function mutateJournal(id=null, data={}) {
  if (id && data) return client.patch(`/journals/${id}`, data); 
  return client.delete(`/journals/${id}`);
}
