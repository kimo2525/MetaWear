import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";
// import DC_SHOP_DATA2 from "../../DC_SHOP_DATA2.js";

const Home = () => {
  // console.log(Object.keys(DC_SHOP_DATA2));
  const spliceIntoSmallerArray = (DC_SHOP_DATA2) => {
    const splicedArray = Object.keys(DC_SHOP_DATA2).reduce((acc, group) => {
      const { title, items } = DC_SHOP_DATA2[group];
      acc[title.toLowerCase()] = items.splice(5, 10);
      return acc;
    }, {});
    const jsonString = JSON.stringify(splicedArray, null, 2);

    const blob = new Blob([jsonString], { type: "application/json" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "spliceIntoSmallerArray.json";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return splicedArray;
  };

  // function ExportObjectButton() {
  //   const handleDownload = () => {
  //     const myData = spliceIntoSmallerArray(DC_SHOP_DATA2);
  //     const jsonString = JSON.stringify(myData, null, 2);

  //     const blob = new Blob([jsonString], { type: "application/json" });

  //     const url = URL.createObjectURL(blob);

  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.download = "spliceIntoSmallerArray.json";
  //     document.body.appendChild(link);
  //     link.click();

  //     document.body.removeChild(link);
  //     URL.revokeObjectURL(url);
  //   };

  //   return <button onClick={handleDownload}>Export Object to File</button>;
  // }

  return (
    <div>
      <Directory />
      <Outlet />
      {/* <button
        onClick={() => console.log(spliceIntoSmallerArray(DC_SHOP_DATA2))}
      >
        Splice JSON
      </button> */}
      {/* <button onClick={() => downloadObjectAsJson()}>Copy Outside</button> */}
      {/* <ExportObjectButton /> */}
    </div>
  );
};

export default Home;
