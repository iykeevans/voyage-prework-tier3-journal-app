import Journals from '../models/journals';

/**
 * @function addJournal
 * @description adds a journal to the database
 * @param {object} req
 * @param {object} res
 * @returns {object} journal
 */
export async function addJournal(req, res) {
  try {
    console.log('++++++>', req.user);
    req.body.userId = req.user.id;
    req.body.username = req.user.username;
    const journal = new Journals(req.body);
    const data = await journal.save();

    res.status(201).json({
      status: 201,
      data
    });
  } catch (error) {
    console.log('=======> addJournal', error);
    res.status(500).json({
      status: 500,
      error
    });
  }
}

/**
 * @function getJournals
 * @description get all journals from the database
 * @param {object} req
 * @param {object} res
 * @returns {array} journals
 */
export async function getJournals(req, res) {
  try {
    const journals = await Journals.find().sort({ created_at: -1 });

    res.json({
      status: 200,
      data: journals
    });
  } catch (error) {
    console.log('=======> getJournals', error);
    res.status(500).json({
      status: 500,
      error
    });
  }
}

/**
 * @function getJournal
 * @description get a journal from the database
 * @param {object} req
 * @param {object} res
 * @returns {object} journal
 */
export async function getJournal(req, res) {
  try {
    const { id } = req.params;
    const journal = await Journals.findById(id);

    res.json({
      status: 200,
      data: journal
    });
  } catch (error) {
    console.log('=======> getJournal', error);
    res.status(500).json({
      status: 500,
      error
    });
  }
}

/**
 * @function updateJournal
 * @description update a journal in the database
 * @param {object} req
 * @param {object} res
 * @returns {object} journal
 */
export async function updateJournal(req, res) {
  try {
    const { id } = req.params;
    req.body.user = req.user;
    const journal = await Journals.findByIdAndUpdate(id, req.body, {
      new: true
    });

    res.json({
      status: 200,
      data: journal
    });
  } catch (error) {
    console.log('========> updateJournal', error);
    res.status(500).json({
      status: 500,
      error
    });
  }
}

/**
 * @function deleteJournal
 * @description delete a journal from the database
 * @param {object} req
 * @param {object} res
 * @returns {object} journal
 */
export async function deleteJournal(req, res) {
  try {
    const { id } = req.params;
    const journal = await Journals.findByIdAndRemove(id);

    res.json({
      status: 200,
      data: journal
    });
  } catch (error) {
    console.log('===========> deleteJournal', error);
    res.status(500).json({
      status: 500,
      error
    });
  }
}
