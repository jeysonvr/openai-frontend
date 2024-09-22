import { QuestionResponse } from "../../../interfaces";


export const postQuestionUseCase = async (threadId: string, question: string) => {
  try {
    const resp = await fetch(`${import.meta.env.VITE_ASSISTANT_API}/user-question`, {
      method: 'POST',
      body: JSON.stringify({ threadId, question }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const replies = await resp.json() as QuestionResponse[];
    console.log(replies);

    return replies;

  } catch (error) {
    console.log(error);
    throw new Error('Error posting question')
  }
}
