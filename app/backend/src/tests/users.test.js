const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require("sequelize-test-helpers");

const chai = require("chai");
const { stub } = require("sinon");
const chaiHttp = require("chai-http");
const { expect } = chai;

chai.use(chaiHttp);

const app = require("../../src/app");
const User = require("../database/models/UserModel");
const mockUser = require("../tests/mock/mockUser");

describe("Verifica model de User", () => {
  const result = User(sequelize, dataTypes);
  const user = new User();

  it('possui o nome "User"', () => {
    checkModelName(result)("User");
  });
  it('possui as propriedades "fullName" e "cpf"', () => {
    ["fullName", "cpf"].forEach(checkPropertyExists(user));
  });
  describe('Verifica rota POST "/user" ', () => {
    before(async () => {
      try {
        postUser = await chai.request(app).post("/user").send({ mockUser });

        const {
          body: { id },
        } = postUser;

        getUser = await chai.request(app).get(`/user/${id}`);
      } catch (error) {
        console.error(error.message);
      }
    });
    it("retorna 201 - Created", async () => {
      const { status } = postUser;

      expect(status).to.be.equals(201);
    });
    it("retorna um atributo por `id`", async () => {
      const {
        body: { id: postId },
      } = postUser;
      const {
        body: { id: getId },
      } = getUser;

      expect(postId).to.be.equals(getId);
    });
  });
});
