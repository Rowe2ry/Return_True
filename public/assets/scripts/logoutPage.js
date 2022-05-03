const { post } = require("../../../controllers")

const logOut = async () => {
    const confirm = await fetch('/account/logout', {
        method: post,
        headers: { 'Content-Type': 'application/json' }
    });

    if (!confirm.ok) {
        alert(confirm.statusText);
    };
};

logOut();