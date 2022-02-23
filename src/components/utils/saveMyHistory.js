const saveMyHistory = async (historyOfMoves) => {
  if (historyOfMoves.length < 1) {
    return alert("Что бы сохранить игру, вам не мешало бы сначала её начать...");
  }
  const data = JSON.stringify({ historyOfMoves: historyOfMoves });
  try {
    let responce = await fetch("http://localhost:3030/users/saveMyHistory", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
      credentials: "include",
      method: "PATCH",
      body: data,
    });
    let result = await responce.json();
    if (result.status === "success") {
      alert("Ваша история ходов сохранена");
    } else {
      if (result.message && result.message === "jwt expired") {
        alert("Срок авторизации вышел! Пожалуйста, войдите заново в Ваш аккаунт, что бы сохранить игру.");
      }
      if (result.message && result.message.includes("Вы не авторизованы!")) {
        alert("Что бы сохранить игру, вам нужно войти.");
      }
      if (result.message && result.message === "Пользователь, получивший этот токен, больше не существует.") {
        alert("Пользователь, получивший этот токен, больше не существует.");
      } else {
        console.log(result.message);
      }
      // alert(result.message);
    }
  } catch (err) {
    console.log(err.message);
    if (err.message.includes("Failed to fetch")) {
      alert("Сервер не отвечает. Проверьте сетевое подключение.");
    } else {
      alert("Непредвиденная ошибка!");
    }
  }
};

export default saveMyHistory;
