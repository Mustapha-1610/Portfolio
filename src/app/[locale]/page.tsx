import MyComponent from "./components/d";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/fetch`, {
    method: "GET",
    cache: "no-cache",
  });
  const resData = await res.json();
  return <MyComponent projectsData={resData}></MyComponent>;
}
