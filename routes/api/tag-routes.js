const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  const allTags = await Tag.findAll({
    include: [
      {
        model: Product,
      },
    ],
  });
  res.json(allTags);
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  const oneTag = await Tag.findOne({
    include: [
      {
        model: Product,
        where: { id: req.params.id },
      },
    ],
  });
  res.json(oneTag);
  // be sure to include its associated Product data
});

router.post("/", async (req, res) => {
  // create a new tag
  const newTag = await Tag.create({
    tag_name: req.body.tag_name,
  });
  res.json(newTag);
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  const updateTag = await Tag.update({
    where: { id: req.params.id },
  });
  res.json(updateTag);
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  const deleteTag = await Tag.destroy({
    where: { id: req.params.id },
  });
  res.json(deleteTag);
});

module.exports = router;
