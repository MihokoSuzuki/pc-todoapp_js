import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  let inputTodo = document.getElementById("input-todo").value;
  document.getElementById("input-todo").value = "";

  createIncompleteList(inputTodo);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteLIst = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加
const createIncompleteList = (text) => {
  // TODOテキスト生成
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerText = text;

  //完了ボタン生成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    //未完了から削除
    deleteFromIncompleteLIst(completeBtn.parentNode);

    //完了アイテム取得
    const moveTodo = completeBtn.parentNode;
    const moveTodoText = moveTodo.firstElementChild.innerText;

    //movoTodo初期化
    moveTodo.textContent = null;
    const p = document.createElement("p");
    p.innerText = moveTodoText;

    //戻すボタン生成
    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    backBtn.addEventListener("click", () => {
      //完了リストから削除
      const deleteItem = backBtn.parentNode;
      document.getElementById("complete-list").removeChild(deleteItem);

      //戻すアイテムの取得
      const backTodoText = deleteItem.firstElementChild.innerText;
      createIncompleteList(backTodoText);
    });

    //完了アイテムに設定
    moveTodo.appendChild(p);
    moveTodo.appendChild(backBtn);

    document.getElementById("complete-list").appendChild(moveTodo);
  });

  //削除ボタン生成
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    deleteFromIncompleteLIst(deleteBtn.parentNode);
  });

  li.appendChild(p);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  //リストアイテムをリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("btn-add")
  .addEventListener("click", () => onClickAdd());
