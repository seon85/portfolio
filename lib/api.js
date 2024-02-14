export const sendContactForm = async data =>
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  }).then(res => {
    if (!res.ok) throw new Error('항목을 입력해주세요');
    return res.json();
  });
