import SavingGroup from './model';

export const createSavingGroup = async (req, res) => {
  console.log(req.currentUser);
  const { title, payment, description } = req.body;
  const newSavingGroup = new SavingGroup({ title, payment, description });

  try {
    return res.status(201).json({ savingGroup: await newSavingGroup.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Saving Group' });
  }
};

export const getAllSavingGroups = async (req, res) => {
  try {
    return res.status(200).json({ savingGroups: await SavingGroup.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Saving Group' });
  }
};

export const addMember = async (req, res) => {
  const { group } = req.params;
  const { user } = req.body;
  try {
    return res.status(200).json({
      savingGroups: await SavingGroup.findByIdAndUpdate(
        group, { $push: { members: user } },
        { safe: true, upsert: true },
        (err, model) => {
          console.log(err);
        },
      ),
    });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Saving Group' });
  }
};


