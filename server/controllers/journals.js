import Journals from '../models/journals';

export async function addJournal(req, res) {
  try {
    const journal = new Journals(req.body);
    const data = await journal.save();
    
    res.status(201).json({
      status: 201,
      data,
    });
  }
  catch(error) {
    res.status(500).json({
      status: 500,
      error,
    });
  }
}

export async function getJournals(req, res) {
  try {
    const journals = await Journals.find();

    res.json({
      status: 200,
      data: journals,
    });
  }
  catch(error) {
    res.status(500).json({
      status: 500,
      error,
    });
  }
}

export async function getJournal(req, res) {
  try {
    const { id } = req.params;
    const journal = await Journals.findById(id)

    res.json({
      status: 200,
      data: journal,
    });
  }
  catch(error) {
    res.status(500).json({
      status: 500,
      error,
    });
  }
}

export async function updateJournal(req, res) {
  try {
    const { id } = req.params;
    const journal = await Journals.findByIdAndUpdate(id, req.body, { new: true });

    res.json({
      status: 200,
      data: journal,
    });
  }
  catch(error) {
    res.status(500).json({
      status: 500,
      error,
    });
  }
}

export async function deleteJournal(req, res) {
  try {
    const { id } = req.params;
    const journal = await Journals.findByIdAndRemove(id);

    res.json({
      status: 200,
      data: journal,
    });
  }
  catch(error) {
    res.status(500).json({
      status: 500,
      error,
    });
  }
}
