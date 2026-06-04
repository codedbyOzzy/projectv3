import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const l = require('./node_modules/lucide-react/dist/cjs/lucide-react.js');
const toCheck = ['Workflow','Sparkles','BellRing','ShieldCheck','Activity','SlidersHorizontal','UserCog','Moon','Database','GitPullRequest','Clipboard','Shuffle','Mail','Eye','FileText','Globe','CheckCircle','Clock','Cpu','Zap','MessageSquare','Search','FolderOpen','Mic','Terminal','Network','ChevronRight','Code2','BookOpen','ArrowRight','Server','GitBranch'];
toCheck.forEach(k => {
  console.log(k + ': ' + (typeof l[k] !== 'undefined' ? 'OK' : 'MISSING'));
});
