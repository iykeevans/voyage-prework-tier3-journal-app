import client from './client';

export function getJournals(id=null) {
  if (id) return client.get(`/journals/${id}`);
  return client.get('/journals')
}

export function createJournal(journal={}) {
  return client.post('/journals', journal);
}

export function mutateJournal(id=null, data={}) {
  console.log('_________>', id, data, Object.keys(data).length)
  if (id && Object.keys(data).length) return client.patch(`/journals/${id}`, data); 
  return client.delete(`/journals/${id}`);
}
