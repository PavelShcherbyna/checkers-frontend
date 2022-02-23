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
    } else if (result.message && result.message === "jwt expired") {
      localStorage.removeItem("JWT");
    } else {
      console.log("getMyInfo Eroor:", result.message);
    }
  } catch (err) {
    console.log("Поймана ошибка:", err.message);
  }
};

export default getMyInfo;
