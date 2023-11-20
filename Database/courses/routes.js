import Database from "../Database/index.js";
function CourseRoutes(app) {
    app.get("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        const course = Database.courses
          .find((c) => c._id === id);
        if (!course) {
          res.status(404).send("Course not found");
          return;
        }
        res.send(course);
      });    
    app.get("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        const course = Database.courses
          .find((c) => c._id === id);
        if (!course) {
          res.status(404).send("Course not found");
          return;
        }
        res.send(course);
      });    
      app.put("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        const moduleIndex = db.modules.findIndex(
          (m) => m._id === mid);
        db.modules[moduleIndex] = {
          ...db.modules[moduleIndex],
          ...req.body
        };
        res.sendStatus(204);
      });
      
    app.delete("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        db.modules = db.modules.filter((m) => m._id !== mid);
        res.sendStatus(200);
        });      
    app.post("/api/courses", (req, res) => {
        const course = { ...req.body,
            _id: new Date().getTime().toString() };
        Database.courses.push(course);
        res.send(course);
    });

    app.get("/api/courses", (req, res) => {
        const courses = Database.courses;
        res.send(courses);
    });
}
export default CourseRoutes;