// import DigitUI from "./DigitUI";

function App() {
  console.log("inside app")
  return (
    <div className="App">
      {/* <DigitUI /> */}
    </div>
  );
}

export default App;

// import React from "react";
// import { initLibraries } from "@egovernments/digit-ui-libraries";
// // import { DigitUI } from "@egovernments/digit-ui-module-core";



// window.contextPath = window?.globalConfigs?.getConfig("CONTEXT_PATH");
// console.log("inside main app")
// const enabledModules = [
// ];
// // const HCM_MODULE_NAME = "campaign";
// // export const OverrideUICustomizations = {
// //   HCM_MODULE_NAME,
// // }
// const setupLibraries = (Library, service, method) => {
//   window.Digit = window.Digit || {};
//   window.Digit[Library] = window.Digit[Library] || {};
//   window.Digit[Library][service] = method;
// };
// /* To Overide any existing config/middlewares  we need to use similar method */
// const updateCustomConfigs = () => {
//   setupLibraries("Customizations", "commonUiConfig", { ...window?.Digit?.Customizations?.commonUiConfig });
// };


// const moduleReducers = (initData) => ({
//   initData,
// });

// const initDigitUI = () => {

//   try {
//     window.Digit.ComponentRegistryService.setupRegistry({});
//     window.Digit.Customizations = {
//       PGR: {},
//       // commonUiConfig: UICustomizations,
//     };
//     // initHRMSComponents();
//     // initUtilitiesComponents();
//     // initWorkbenchComponents();
//     // initWorkbenchHCMComponents();
//     // initCampaignComponents();
//     updateCustomConfigs();
//   } catch (error) {
//     console.error('Failed to initialize DigitUI:', error);
//     // Consider showing a user-friendly error message
//   }
// };
// let initializationError = null;

// const handleInitError = (error) => {
//   console.error('Failed to initialize libraries:', error);
//   initializationError = error;
// };

// initLibraries().then(() => {
//   initDigitUI();
// }).catch(handleInitError);



// function App() {

//   const [stateCode, setStateCode] = React.useState(null);

//   const [isLoading, setIsLoading] = React.useState(true);
//   React.useEffect(() => {
//     // Add any necessary initialization checks here
//     window.contextPath = window?.globalConfigs?.getConfig("CONTEXT_PATH");
//     const code =
//       window.globalConfigs?.getConfig("STATE_LEVEL_TENANT_ID") ||
//       process.env.REACT_APP_STATE_LEVEL_TENANT_ID;
//     setStateCode(code);
//     setIsLoading(false);
//   }, []);

//   // if (isLoading) {
//   //   return <Loader page={true} variant={"PageLoader"} />;
//   // }
//   // Consider adding this to your App component:
//   if (initializationError) {
//     return <div>Failed to initialize application. Please refresh the page.</div>;
//   }
//   if (!stateCode) {
//     return (
//       <div className="error-container">
//         <h1>Configuration Error</h1>
//         <p>State code is not defined. Please check your configuration.</p>
//       </div>
//     );
//   }
//   return (
//     <DigitUI
//       stateCode={stateCode}
//       enabledModules={enabledModules}
//       moduleReducers={moduleReducers}
//       defaultLanding="employee"
//       allowedUserTypes={["employee"]}
//     />
//   );
// }

// export default App;