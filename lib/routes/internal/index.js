import { Router } from 'express';
import metalogger from 'metalogger';
import Email      from '../../modules/email/index.js';

const router = Router({ mergeParams: true });
const email  = new Email();
const log    = metalogger();

router.post('/auth', async (req, res) => {
  log.info('Authentication: ', req.body);
  res.json(await email.sendAuth(req.body.to, req.body.url, req.body.code));
});

export default router;
