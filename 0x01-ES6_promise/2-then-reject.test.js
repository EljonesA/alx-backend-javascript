import handleResponseFromAPI from "./2-then";

test("handleResponseFromAPI return the right response on reject", () => {
	    const promise = Promise.reject(new Error());
	  
	    const successResponse = handleResponseFromAPI(promise);
	    return expect(successResponse).resolves.toEqual(new Error());
});
