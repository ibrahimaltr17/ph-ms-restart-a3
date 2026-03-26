export const getInstalledApps = () => {
    const stored = localStorage.getItem("installedApps");
    return stored ? JSON.parse(stored) : [];
};

export const saveInstalledApp = (app) => {
    const apps = getInstalledApps();

    // check duplicate
    const exists = apps.find(item => item.id === app.id);
    if (exists) return false;

    apps.push(app);
    localStorage.setItem("installedApps", JSON.stringify(apps));
    return true;
};

export const removeInstalledApp = (id) => {
    const apps = getInstalledApps().filter(app => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(apps));
};