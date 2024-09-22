export const prosConsStreamUseCase = async (prompt: string) => {

  try {

    const resp = await fetch(`${import.meta.env.VITE_GPT_API}/pros-cons-discusser-stream`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
      // todo: abort signal
    });

    if (!resp.ok) throw new Error('Error en la petición');

    const reader = resp.body?.getReader();

    if (!reader) {
      console.log('No se pudo generar el reader');
      return null;
    }

    return reader;

  } catch (error) {
    console.log(error);
    return null;
  }
}
