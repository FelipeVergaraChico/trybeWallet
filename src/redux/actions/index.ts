// Coloque aqui suas actions

export const enviarEmail = (email: string, password: string) => ({
  type: 'SAVE_EMAIL',
  payload: { email, password },
});
