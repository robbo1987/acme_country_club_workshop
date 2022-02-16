const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme_country_club_2"
);

const STRING = Sequelize.DataTypes.STRING;
const UUID = Sequelize.DataTypes.UUID;
const UUIDV4 = Sequelize.DataTypes.UUIDV4;

const Members = sequelize.define("member", {
  name: {
    type: STRING(20),
  },
});

const Facilities = sequelize.define("facility", {
  name: {
    type: STRING(20),
  },
});

const Bookings = sequelize.define('booking', {

});

Members.belongsTo(Members)



const start = async () => {
  try {
    console.log("hello world");
    await sequelize.sync({ force: true });
    const lucy = await Members.create({name: 'lucy'});
    const Moe = await Members.create({ name: "moe" });
    const larry = await Members.create({ name: "larry" });
    const ethyl = await Members.create({name:'ethyl'});
    const tennis = await Facilities.create({ name: "tennis" });
  } catch (ex) {
    console.log(ex);
  }
};

start();
