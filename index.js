function output() {
    let display_text = "";
    Array.from(document.forms[0]).forEach(element => {
        if (element.value == "") {
            display_text += `${element.placeholder}を入力して！\n`
        }
    });

    if (display_text == "") {
        let text = `
${document.forms[0].elements["recent_object"].placeholder}:
        ${document.forms[0].elements["recent_object"].value}
${document.forms[0].elements["review_yesterday"].placeholder}:
        ${document.forms[0].elements["review_yesterday"].value}
${document.forms[0].elements["todo"].placeholder}:
        ${document.forms[0].elements["todo"].value}`;

        navigator.clipboard.writeText(text).then(
            () => {
                response_text.innerText = "クリップボードにコピーしました。";
            },
            () => {
                response_text.innerText = "コピーに失敗しました。";
            });
    } else {
        response_text.innerText = display_text;
    }
}
