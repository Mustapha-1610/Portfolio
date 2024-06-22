import MyComponent from "./components/d";

export default async function HomePage() {
  const res = await fetch(`http://localhost:3000/api/fetch`, {
    method: "GET",
    cache: "no-cache",
  });
  const resData = await res.json();
  return <MyComponent projectsData={resData}></MyComponent>;
}
