A full stack application with frontent on React and Backend on java.

1. React version: npm view react version

2. can't use state if we are not binding the function to the class using bind(). if not binding the method and using directly will cause the error as "cannot read property 'state' of undefined"

3. always remember to use setState to update the state, if we use setState() then only component will render. I have done this mistake  by directly assigning the value as thiis.state.logonFailed = true which shpuldn't be done , it will update the value but will not render the component automatically.