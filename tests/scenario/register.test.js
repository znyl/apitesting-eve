import { assert } from "chai";
import reqresApi from "$root/page/reqres.api.js";
import * as userData from "$root/data/user.data.js";

// Describe = we can call like a Suite
describe('Register', function() {
    // it = we can call a testcase
    it('Should successfull register when insert valid data', async () => {
        const response = await reqresApi.register(userData.VALID_REGISTER);
        assert.equal(response.status, 200);
        assert.isNumber(response.data.id);
        assert.isString(response.data.token);
    });

    it('Should unsuccessfull register when insert invalid data', async () => {
        const response = await reqresApi.register(userData.INVALID_REGISTER);
        assert.equal(response.status, 400);
        assert.equal(response.data.error, "Missing password");
    });
});