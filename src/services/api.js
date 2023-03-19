import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ihijnhglawabqxwvuokt.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloaWpuaGdsYXdhYnF4d3Z1b2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkwODU5NDcsImV4cCI6MTk5NDY2MTk0N30.CJwQp8sQPBSdoGyFf6zIfyPT9zK6rp66IZ5ut2W4Ns4',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloaWpuaGdsYXdhYnF4d3Z1b2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkwODU5NDcsImV4cCI6MTk5NDY2MTk0N30.CJwQp8sQPBSdoGyFf6zIfyPT9zK6rp66IZ5ut2W4Ns4',
  },
});
