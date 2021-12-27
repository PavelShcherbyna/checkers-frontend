const getMyInfo = async () => {
  try {
    let responce = await fetch("http://localhost:3030/users/me", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
      credentials: "include",
      method: "GET",
    });
    let result = await responce.json();
    if (result.status === "success") {
      return result;
    } else {
      console.log("getMyInfo Eroor:", result.message);
    }
  } catch (err) {
    console.log("Поймана ошибка:", err.message);
    //alert("О нет, только не это! Что-то явно пошло не так...");
  }
};

export default getMyInfo;
