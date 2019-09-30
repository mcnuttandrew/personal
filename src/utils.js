export function classnames(classObject) {
  return Object.keys(classObject)
    .filter(name => classObject[name])
    .join(" ");
}

const routes = { research: true, projects: true, about: true };
export function getRoute() {
  const locationSplit = location.href.split("/");
  const naiveLocation = locationSplit[locationSplit.length - 1].toLowerCase();
  return routes[naiveLocation] ? naiveLocation : "about";
}

export function groupBy(data, key) {
  return data.reduce((acc, row) => {
    acc[row[key]] = (acc[row[key]] || []).concat(row);
    return acc;
  }, {});
}