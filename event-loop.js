/*
EVENT LOOP
- what allows nodejs to perform non blocking i/o operations
despite the fact the js is SINGLE threaded
by offloading operatins to the system kernel whenever possible

*offloading*
blog : nodejs.dev > learn > the nodejs event loop
youtube :
 what the heck is event loop anyway philip roberts (browser)
 everything you need to know about node js event loopbert belder, ibm

course-api.com > slides

JS is synchronous and single threaded
e.g. time consuming for loop

offloading to the browser 
e.g. setTimeout

we can still write blocking code in js, but the browser does provide 
nice api where we can offload time consuming task

-requests arrive
-event loop registers callback
-when operation is complete, executes the callback
-running immediate tasks first before running the callback
-callsbacks are put at the end of the line, when there is no more
immediate task to be done, executes the callback

*/
