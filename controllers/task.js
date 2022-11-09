const Task = require("../models/Task");
const User = require("../models/User");
exports.createTask = async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.getAllTask = async (req, res) => {
  try {
    const { state } = req.params;
    const tasks = await Task.find({ taskState: state }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.getAllTaskAll = async (req, res) => {
  try {
    const { state } = req.params;
    const tasks = await Task.find({ taskState: state }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.getAllTaskName = async (req, res) => {
  try {
    const { name } = req.params;
    const tasks = await Task.findOne({ proje_name: name });
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.updateTaskStae = async (req, res) => {
  try {
    const { taskname, st } = req.body;
    const newState = await Task.findOneAndUpdate(
      { proje_name: taskname },
      { taskState: st }
    );
      console.log(taskname,st);
    res.json(newState);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.updateTasUser = async (req, res) => {
  try {
    const user = await User.findById(req.userName);
    const task = await Task.findOne({ proje_name: req.TaskName });
    if (!task.user.includes(user)) {
      await task.updateOne({
        $push: { user: user },
      });
      res.json({ message: "Kullanıcı ekleme başarılı" });
    } else {
      return res.status(400).json({ message: "zaten ekli" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.updateTaskComment = async (req, res) => {
  try {
    const { comment, image, taskId, username } = req.body;
    let newCommnent = await Task.findByIdAndUpdate(
      taskId,
      {
        $push: {
          comments: {
            comment: comment,
            image: image,
            commentBy: username,
          },
        },
      },
      { new: true }
    ).populate("comments.commentBy", "picture first_name last_name username");
    res.json(newCommnent.comments);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.addTaskUser = async (req, res) => {
  try {
    const { newUser, taskname } = req.body;
    const tasks = await Task.findOneAndUpdate(
      { proje_name: taskname },
      {
        $push: { user: newUser },
      }
    );

    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.updateTaskDesc = async (req, res) => {
  try {
    const { newDesc, taskname } = req.body;

    const tasks = await Task.findOneAndUpdate(
      { proje_name: taskname },
      { text: newDesc }
    );

    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.addTaskLinks = async (req, res) => {
  try {
    const { newLink, taskname } = req.body;
    
    const tasks = await Task.findOneAndUpdate(
      { proje_name: taskname },
      {
        $push: { links: newLink },
      }
    );

    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.deleteTask = async(req,res)=>{
  let ok = ""
  try {
    const {taskname} = req.body
    Task.findOneAndDelete(
      { proje_name: taskname },
      function (err, docs) {
        if (err) {
          console.log(err);
          ok = err
        } else {
          console.log("Deleted User : ", docs);
          ok = "ok"
        }
      }
    );
   
    res.json(taskname)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}