// ============================================
// DevOps Mastery — 16-Week Learning Portal
// Complete Course Data + Interactive Dashboard
// ============================================

// ---- COURSE DATA ----
const courseData = [
// ===================== WEEK 1 =====================
{
  week: 1,
  title: "Introduction to DevOps & Linux Basics",
  subtitle: "Understand the DevOps philosophy and get comfortable with the Linux command line",
  difficulty: "beginner",
  tools: ["Linux Terminal", "VirtualBox/WSL", "Bash"],
  timeSplit: { theory: 4, handson: 4, interview: 1, project: 1 },
  checkpoints: [
    "Understand what DevOps is",
    "Set up Linux environment",
    "Navigate the file system",
    "Use basic Linux commands",
    "Understand file permissions"
  ],
  sections: [
    {
      title: "Learning Objectives",
      icon: "&#127919;",
      tag: "Goals",
      content: `<ul>
<li>Define DevOps and understand its core principles</li>
<li>Explain the DevOps lifecycle and its stages</li>
<li>Set up a Linux environment (WSL, VM, or native)</li>
<li>Navigate the Linux file system confidently</li>
<li>Execute essential Linux commands</li>
<li>Understand users, groups, and file permissions</li>
</ul>`
    },
    {
      title: "Theory — What is DevOps?",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Definition</h4>
<p><strong>DevOps</strong> is a set of practices, cultural philosophies, and tools that combine software development (Dev) and IT operations (Ops). The goal is to shorten the software development lifecycle while delivering features, fixes, and updates frequently and reliably.</p>

<h4>The Problem DevOps Solves</h4>
<p>Traditionally, development and operations teams worked in silos:</p>
<ul>
<li><strong>Developers</strong> wrote code and "threw it over the wall" to ops</li>
<li><strong>Operations</strong> deployed and maintained the code, often finding issues</li>
<li>This led to blame games, slow releases, and unreliable deployments</li>
</ul>

<h4>Core Principles of DevOps (CALMS)</h4>
<table>
<tr><th>Principle</th><th>Description</th></tr>
<tr><td><strong>Culture</strong></td><td>Foster collaboration between dev and ops teams. Shared responsibility.</td></tr>
<tr><td><strong>Automation</strong></td><td>Automate repetitive tasks — builds, tests, deployments, infrastructure.</td></tr>
<tr><td><strong>Lean</strong></td><td>Eliminate waste. Continuous improvement. Small batch sizes.</td></tr>
<tr><td><strong>Measurement</strong></td><td>Measure everything — deployment frequency, lead time, MTTR, change failure rate.</td></tr>
<tr><td><strong>Sharing</strong></td><td>Share knowledge, tools, and responsibilities across teams.</td></tr>
</table>

<h4>The DevOps Lifecycle (Infinity Loop)</h4>
<pre><code>Plan → Code → Build → Test → Release → Deploy → Operate → Monitor
  ↑                                                              |
  └──────────────────── Feedback ────────────────────────────────┘</code></pre>

<h4>Key DevOps Practices</h4>
<ul>
<li><strong>Continuous Integration (CI)</strong> — Merge code changes frequently, run automated tests</li>
<li><strong>Continuous Delivery/Deployment (CD)</strong> — Automatically deploy tested code to production</li>
<li><strong>Infrastructure as Code (IaC)</strong> — Define infrastructure using code (Terraform, CloudFormation)</li>
<li><strong>Monitoring & Logging</strong> — Observe system behavior in real-time</li>
<li><strong>Microservices</strong> — Break applications into small, independent services</li>
<li><strong>Containerization</strong> — Package apps with dependencies (Docker)</li>
</ul>

<h4>DevOps vs Traditional IT</h4>
<table>
<tr><th>Aspect</th><th>Traditional</th><th>DevOps</th></tr>
<tr><td>Releases</td><td>Months</td><td>Hours/Days</td></tr>
<tr><td>Teams</td><td>Siloed</td><td>Collaborative</td></tr>
<tr><td>Infrastructure</td><td>Manual</td><td>Automated (IaC)</td></tr>
<tr><td>Testing</td><td>End of cycle</td><td>Continuous</td></tr>
<tr><td>Feedback</td><td>Slow</td><td>Real-time</td></tr>
</table>

<div class="callout callout-info">
<strong>Key Insight:</strong> DevOps is not a tool or a job title — it's a culture and methodology. Tools enable DevOps, but people and processes make it work.
</div>`
    },
    {
      title: "Theory — Linux Fundamentals",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Why Linux for DevOps?</h4>
<ul>
<li>Over 90% of servers worldwide run Linux</li>
<li>All major cloud providers default to Linux</li>
<li>Docker and Kubernetes are Linux-native</li>
<li>Most DevOps tools are designed for Linux</li>
</ul>

<h4>What is Linux?</h4>
<p>Linux is an open-source operating system kernel created by Linus Torvalds in 1991. A Linux <strong>distribution</strong> (distro) bundles the kernel with tools and package managers.</p>

<table>
<tr><th>Distro</th><th>Use Case</th><th>Package Manager</th></tr>
<tr><td>Ubuntu</td><td>Servers, beginners</td><td>apt</td></tr>
<tr><td>CentOS/RHEL</td><td>Enterprise servers</td><td>yum/dnf</td></tr>
<tr><td>Alpine</td><td>Docker containers</td><td>apk</td></tr>
<tr><td>Debian</td><td>Stable servers</td><td>apt</td></tr>
</table>

<h4>Setting Up Your Linux Environment</h4>
<h5>Option 1: Windows Subsystem for Linux (WSL) — Recommended for Windows</h5>
<pre><code># Open PowerShell as Admin
wsl --install

# This installs Ubuntu by default
# Restart your computer
# Open "Ubuntu" from the Start menu
# Set up your username and password</code></pre>

<h5>Option 2: VirtualBox</h5>
<ol>
<li>Download VirtualBox from virtualbox.org</li>
<li>Download Ubuntu Server ISO</li>
<li>Create a new VM: 2GB RAM, 20GB disk</li>
<li>Install Ubuntu from the ISO</li>
</ol>

<h4>The Linux File System</h4>
<pre><code>/              ← Root of everything
├── /home      ← User home directories
├── /etc       ← Configuration files
├── /var       ← Variable data (logs, databases)
├── /tmp       ← Temporary files
├── /usr       ← User programs and utilities
├── /bin       ← Essential binaries (ls, cp, mv)
├── /sbin      ← System binaries (admin commands)
├── /opt       ← Optional/third-party software
├── /dev       ← Device files
├── /proc      ← Process information (virtual)
└── /mnt       ← Mount points</code></pre>

<h4>Essential Linux Commands</h4>

<h5>Navigation</h5>
<pre><code># Print current directory
pwd

# List files
ls              # basic list
ls -la          # detailed list with hidden files
ls -lh          # human-readable file sizes

# Change directory
cd /home        # go to /home
cd ~            # go to home directory
cd ..           # go up one level
cd -            # go to previous directory</code></pre>

<h5>File Operations</h5>
<pre><code># Create files and directories
touch myfile.txt           # create empty file
mkdir mydir                # create directory
mkdir -p a/b/c             # create nested directories

# Copy, Move, Delete
cp file1.txt file2.txt     # copy file
cp -r dir1 dir2            # copy directory recursively
mv old.txt new.txt         # rename/move file
rm file.txt                # delete file
rm -r mydir                # delete directory recursively

# View files
cat file.txt               # display entire file
less file.txt              # paginated view (q to quit)
head -n 10 file.txt        # first 10 lines
tail -n 10 file.txt        # last 10 lines
tail -f /var/log/syslog    # follow log in real time</code></pre>

<h5>Searching</h5>
<pre><code># Find files
find / -name "*.log"              # find all .log files
find /home -type d -name "config" # find directories named config

# Search inside files
grep "error" logfile.txt          # find lines containing "error"
grep -r "TODO" /project           # recursive search
grep -i "warning" file.txt        # case-insensitive</code></pre>

<h4>Users, Groups & Permissions</h4>
<pre><code># File permission format: -rwxrwxrwx
#                          │ │  │  │
#                          │ │  │  └── Others
#                          │ │  └───── Group
#                          │ └──────── Owner
#                          └────────── File type (- = file, d = directory)

# Permission values
# r (read)    = 4
# w (write)   = 2
# x (execute) = 1

# Examples
chmod 755 script.sh    # rwxr-xr-x (owner: full, others: read+execute)
chmod 644 file.txt     # rw-r--r-- (owner: read+write, others: read only)
chmod +x script.sh     # add execute permission

# Change ownership
chown user:group file.txt
chown -R user:group directory/</code></pre>

<div class="callout callout-tip">
<strong>Tip:</strong> Use <code>man command_name</code> to read the manual for any command. Example: <code>man chmod</code>
</div>`
    },
    {
      title: "Hands-On Tasks",
      icon: "&#128295;",
      tag: "Practice",
      content: `<h4>Task 1: Set Up Your Linux Environment</h4>
<ol>
<li>Install WSL (Windows) or set up a Linux VM</li>
<li>Open the terminal and run: <code>whoami</code>, <code>hostname</code>, <code>uname -a</code></li>
<li>Take note of your username, hostname, and kernel version</li>
</ol>

<h4>Task 2: File System Exploration</h4>
<pre><code># Navigate to root and explore
cd /
ls -la

# Check these directories
ls /etc
ls /var/log
ls /home

# Create your working directory
mkdir -p ~/devops-lab/week1
cd ~/devops-lab/week1
pwd</code></pre>

<h4>Task 3: File Operations Practice</h4>
<pre><code># Create files
touch notes.txt readme.md script.sh
echo "Hello DevOps" > notes.txt
echo "#!/bin/bash" > script.sh
echo 'echo "Hello World"' >> script.sh

# Make script executable and run it
chmod +x script.sh
./script.sh

# Copy and move
cp notes.txt notes_backup.txt
mkdir archive
mv notes_backup.txt archive/

# View results
ls -la
cat notes.txt
cat script.sh</code></pre>

<h4>Task 4: User & Permission Practice</h4>
<pre><code># Check current user info
id
groups

# Create test files with different permissions
touch public.txt private.txt executable.sh
chmod 644 public.txt    # everyone can read
chmod 600 private.txt   # only owner can read/write
chmod 755 executable.sh # everyone can execute

# Verify
ls -la public.txt private.txt executable.sh</code></pre>

<h4>Task 5: Search and Filter</h4>
<pre><code># Create sample data
echo -e "INFO: System started\\nERROR: Disk full\\nINFO: User login\\nWARNING: High CPU\\nERROR: Connection timeout" > syslog.txt

# Practice grep
grep "ERROR" syslog.txt
grep -c "ERROR" syslog.txt    # count matches
grep -i "info" syslog.txt     # case-insensitive
grep -v "INFO" syslog.txt     # invert match (exclude INFO)</code></pre>`
    },
    {
      title: "Real-World Project",
      icon: "&#128188;",
      tag: "Project",
      content: `<h4>Project: Server Health Check Script</h4>
<p>Create a simple script that checks basic system health — this is a common task for DevOps engineers.</p>

<pre><code>#!/bin/bash
# save as: health_check.sh

echo "=============================="
echo "  Server Health Check Report"
echo "=============================="
echo ""

echo "--- System Info ---"
echo "Hostname: $(hostname)"
echo "OS: $(uname -o)"
echo "Kernel: $(uname -r)"
echo "Uptime: $(uptime -p)"
echo ""

echo "--- Disk Usage ---"
df -h / | tail -1
echo ""

echo "--- Memory Usage ---"
free -h | head -2
echo ""

echo "--- Top 5 CPU Processes ---"
ps aux --sort=-%cpu | head -6
echo ""

echo "--- Current User ---"
whoami
echo ""

echo "=============================="
echo "  Report generated at: $(date)"
echo "=============================="</code></pre>

<pre><code># Make it executable and run
chmod +x health_check.sh
./health_check.sh</code></pre>

<p><strong>Expected Outcome:</strong> A formatted report showing system info, disk usage, memory, and top processes. This mimics what real monitoring scripts do on production servers.</p>`
    },
    {
      title: "Interview Preparation",
      icon: "&#127908;",
      tag: "Interview",
      content: `<div class="qa-block">
<p class="qa-q">Q: What is DevOps?</p>
<p class="qa-a">A: DevOps is a culture and set of practices that unifies software development and IT operations. It aims to shorten the development lifecycle, increase deployment frequency, and achieve faster time to market — all while maintaining high quality and reliability.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What are the key principles of DevOps?</p>
<p class="qa-a">A: The CALMS framework — Culture (collaboration), Automation (eliminate manual work), Lean (continuous improvement), Measurement (metrics-driven decisions), and Sharing (knowledge sharing across teams).</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: Name the stages of the DevOps lifecycle.</p>
<p class="qa-a">A: Plan, Code, Build, Test, Release, Deploy, Operate, Monitor — forming a continuous feedback loop (the "infinity loop").</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is the difference between /bin and /usr/bin in Linux?</p>
<p class="qa-a">A: /bin contains essential binaries needed for single-user mode and system boot (ls, cp, mv). /usr/bin contains general-purpose binaries for all users that are not required for booting.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: Explain Linux file permissions.</p>
<p class="qa-a">A: Linux uses a permission model with three levels (owner, group, others) and three types (read=4, write=2, execute=1). For example, chmod 755 gives the owner full access (7=rwx) and everyone else read+execute (5=r-x).</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How do you find all files larger than 100MB?</p>
<p class="qa-a">A: <code>find / -type f -size +100M</code></p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What does the command <code>chmod 600 file.txt</code> do?</p>
<p class="qa-a">A: It sets the file permissions so that only the owner can read and write the file. No access for group or others. (rw-------)</p>
</div>`
    },
    {
      title: "Time Split (10 Hours)",
      icon: "&#9200;",
      tag: "Schedule",
      content: `<div class="time-split-grid">
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Theory & Reading</span></div>
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Hands-On Practice</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Project Work</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Interview Prep</span></div>
</div>`
    }
  ]
},

// ===================== WEEK 2 =====================
{
  week: 2,
  title: "Linux Administration & Process Management",
  subtitle: "Master system administration, process management, and package management",
  difficulty: "beginner",
  tools: ["Bash", "systemd", "apt/yum", "cron"],
  timeSplit: { theory: 3, handson: 4, interview: 1, project: 2 },
  checkpoints: [
    "Manage packages with apt/yum",
    "Understand process management",
    "Work with systemd services",
    "Use pipes and redirection",
    "Set up cron jobs"
  ],
  sections: [
    {
      title: "Learning Objectives",
      icon: "&#127919;",
      tag: "Goals",
      content: `<ul>
<li>Install, update, and remove software packages</li>
<li>Monitor and manage Linux processes</li>
<li>Understand systemd and service management</li>
<li>Master I/O redirection and pipes</li>
<li>Schedule tasks with cron</li>
<li>Manage system resources</li>
</ul>`
    },
    {
      title: "Theory — Package Management",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>What is Package Management?</h4>
<p>A <strong>package manager</strong> automates installing, upgrading, configuring, and removing software. Think of it as an app store for your server.</p>

<h4>APT (Debian/Ubuntu)</h4>
<pre><code># Update package lists (always do this first)
sudo apt update

# Upgrade installed packages
sudo apt upgrade -y

# Install a package
sudo apt install nginx -y

# Remove a package
sudo apt remove nginx

# Remove package + config files
sudo apt purge nginx

# Search for packages
apt search web-server

# Show package info
apt show nginx

# List installed packages
apt list --installed</code></pre>

<h4>YUM/DNF (CentOS/RHEL/Fedora)</h4>
<pre><code># Update all packages
sudo yum update -y

# Install a package
sudo yum install httpd -y

# Remove a package
sudo yum remove httpd

# Search
yum search web-server

# List installed
yum list installed</code></pre>

<div class="callout callout-info">
<strong>Repository:</strong> Packages are downloaded from <em>repositories</em> — online servers hosting software collections. You can add third-party repos for additional software.
</div>`
    },
    {
      title: "Theory — Process Management",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>What is a Process?</h4>
<p>A process is a running instance of a program. Every process has a unique <strong>PID</strong> (Process ID).</p>

<h4>Process Commands</h4>
<pre><code># List processes
ps aux                  # all processes with details
ps -ef                  # alternative format
ps aux | grep nginx     # find specific process

# Real-time monitoring
top                     # interactive process viewer
htop                    # improved version (install first)

# Process tree
pstree                  # shows parent-child relationships

# Background & Foreground
sleep 100 &             # run in background
jobs                    # list background jobs
fg %1                   # bring job 1 to foreground
bg %1                   # resume job 1 in background

# Kill processes
kill PID                # graceful termination (SIGTERM)
kill -9 PID             # force kill (SIGKILL)
killall nginx           # kill all processes named nginx
pkill -f "python app"   # kill by pattern</code></pre>

<h4>Process States</h4>
<table>
<tr><th>State</th><th>Symbol</th><th>Meaning</th></tr>
<tr><td>Running</td><td>R</td><td>Actively using CPU</td></tr>
<tr><td>Sleeping</td><td>S</td><td>Waiting for an event</td></tr>
<tr><td>Stopped</td><td>T</td><td>Stopped by signal (Ctrl+Z)</td></tr>
<tr><td>Zombie</td><td>Z</td><td>Finished but parent hasn't read exit status</td></tr>
</table>

<h4>System Resource Monitoring</h4>
<pre><code># Memory usage
free -h

# Disk usage
df -h                   # filesystem usage
du -sh /var/log         # directory size

# CPU info
nproc                   # number of CPU cores
lscpu                   # detailed CPU info

# System uptime and load
uptime
# Output: 10:30 up 5 days, load average: 0.5, 0.3, 0.2
# Load average: 1-min, 5-min, 15-min
# Rule of thumb: load should be < number of CPU cores</code></pre>`
    },
    {
      title: "Theory — Systemd & Services",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>What is systemd?</h4>
<p><strong>systemd</strong> is the init system and service manager for modern Linux. It manages the boot process and controls system services (daemons).</p>

<h4>Managing Services with systemctl</h4>
<pre><code># Start/Stop a service
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl reload nginx    # reload config without restart

# Enable/Disable at boot
sudo systemctl enable nginx    # start on boot
sudo systemctl disable nginx   # don't start on boot

# Check status
systemctl status nginx

# List all services
systemctl list-units --type=service
systemctl list-units --type=service --state=running</code></pre>

<h4>Viewing Logs with journalctl</h4>
<pre><code># View all logs
journalctl

# Logs for a specific service
journalctl -u nginx

# Follow logs in real-time
journalctl -u nginx -f

# Logs since last boot
journalctl -b

# Logs from last hour
journalctl --since "1 hour ago"</code></pre>`
    },
    {
      title: "Theory — I/O Redirection & Pipes",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Standard Streams</h4>
<table>
<tr><th>Stream</th><th>Number</th><th>Description</th></tr>
<tr><td>stdin</td><td>0</td><td>Standard input (keyboard)</td></tr>
<tr><td>stdout</td><td>1</td><td>Standard output (screen)</td></tr>
<tr><td>stderr</td><td>2</td><td>Standard error (screen)</td></tr>
</table>

<h4>Redirection</h4>
<pre><code># Redirect stdout to file (overwrite)
echo "hello" > output.txt

# Redirect stdout to file (append)
echo "world" >> output.txt

# Redirect stderr to file
command_that_fails 2> errors.txt

# Redirect both stdout and stderr
command 2>&1 > all_output.txt

# Discard output
command > /dev/null 2>&1</code></pre>

<h4>Pipes</h4>
<p>Pipes (<code>|</code>) send the output of one command as input to another.</p>
<pre><code># Count lines in a file
cat access.log | wc -l

# Find and count errors
cat syslog.txt | grep "ERROR" | wc -l

# Sort and get unique values
cat data.txt | sort | uniq

# Top 10 most common IP addresses in access log
cat access.log | awk '{print $1}' | sort | uniq -c | sort -rn | head -10</code></pre>

<h4>Useful Text Processing Commands</h4>
<pre><code># cut — extract columns
echo "name:age:city" | cut -d: -f2    # output: age

# awk — pattern scanning
ps aux | awk '{print $1, $2, $11}'     # print user, PID, command

# sed — stream editor
sed 's/old/new/g' file.txt             # replace all occurrences
sed -i 's/error/ERROR/g' log.txt       # in-place replacement

# wc — word count
wc -l file.txt    # lines
wc -w file.txt    # words
wc -c file.txt    # bytes</code></pre>`
    },
    {
      title: "Theory — Cron Jobs",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>What is Cron?</h4>
<p>Cron is a time-based job scheduler in Linux. Use it to automate repetitive tasks.</p>

<h4>Crontab Format</h4>
<pre><code># ┌───────────── minute (0-59)
# │ ┌───────────── hour (0-23)
# │ │ ┌───────────── day of month (1-31)
# │ │ │ ┌───────────── month (1-12)
# │ │ │ │ ┌───────────── day of week (0-7, 0 and 7 = Sunday)
# │ │ │ │ │
# * * * * * command_to_execute</code></pre>

<h4>Examples</h4>
<pre><code># Edit crontab
crontab -e

# List cron jobs
crontab -l

# Every day at 2 AM
0 2 * * * /home/user/backup.sh

# Every 5 minutes
*/5 * * * * /home/user/health_check.sh

# Every Monday at 9 AM
0 9 * * 1 /home/user/weekly_report.sh

# First day of every month at midnight
0 0 1 * * /home/user/monthly_cleanup.sh</code></pre>

<div class="callout callout-tip">
<strong>Tip:</strong> Always redirect cron output to a log file: <code>*/5 * * * * /script.sh >> /var/log/myscript.log 2>&1</code>
</div>`
    },
    {
      title: "Hands-On Tasks",
      icon: "&#128295;",
      tag: "Practice",
      content: `<h4>Task 1: Package Management</h4>
<pre><code>sudo apt update
sudo apt install -y tree curl wget htop
tree ~/devops-lab
which curl wget htop</code></pre>

<h4>Task 2: Process Management</h4>
<pre><code># Start a background process
sleep 300 &
ps aux | grep sleep
kill %1

# Monitor system resources
top     # press 'q' to quit
free -h
df -h</code></pre>

<h4>Task 3: Pipes and Redirection</h4>
<pre><code># Create sample data
for i in $(seq 1 100); do echo "Line $i: $(shuf -i 1-5 -n 1) errors found" >> app.log; done

# Practice
cat app.log | grep "5 errors" | wc -l
cat app.log | sort -t: -k2 -n | tail -5
cat app.log | awk -F: '{print $2}' | sort | uniq -c | sort -rn</code></pre>

<h4>Task 4: Schedule a Cron Job</h4>
<pre><code># Create a script that logs the date
echo '#!/bin/bash
echo "Heartbeat: $(date)" >> ~/devops-lab/heartbeat.log' > ~/devops-lab/heartbeat.sh
chmod +x ~/devops-lab/heartbeat.sh

# Add to crontab (runs every minute)
(crontab -l 2>/dev/null; echo "* * * * * ~/devops-lab/heartbeat.sh") | crontab -

# Wait 2-3 minutes, then check
cat ~/devops-lab/heartbeat.log

# Remove the cron job when done
crontab -r</code></pre>`
    },
    {
      title: "Real-World Project",
      icon: "&#128188;",
      tag: "Project",
      content: `<h4>Project: Automated Log Analyzer</h4>
<p>Build a script that analyzes log files — a daily task for DevOps engineers.</p>

<pre><code>#!/bin/bash
# log_analyzer.sh — Analyze application logs

LOG_FILE=\${1:-"app.log"}
REPORT_FILE="log_report_$(date +%Y%m%d_%H%M%S).txt"

if [ ! -f "$LOG_FILE" ]; then
    echo "Error: $LOG_FILE not found!"
    exit 1
fi

{
    echo "================================"
    echo "  Log Analysis Report"
    echo "  File: $LOG_FILE"
    echo "  Date: $(date)"
    echo "================================"
    echo ""
    echo "--- Summary ---"
    echo "Total lines: $(wc -l < "$LOG_FILE")"
    echo "Error count: $(grep -c -i "error" "$LOG_FILE")"
    echo "Warning count: $(grep -c -i "warning" "$LOG_FILE")"
    echo "Info count: $(grep -c -i "info" "$LOG_FILE")"
    echo ""
    echo "--- Recent Errors ---"
    grep -i "error" "$LOG_FILE" | tail -5
    echo ""
    echo "--- Error Distribution ---"
    grep -i "error" "$LOG_FILE" | awk '{print $NF}' | sort | uniq -c | sort -rn | head -10
} > "$REPORT_FILE"

echo "Report saved to: $REPORT_FILE"
cat "$REPORT_FILE"</code></pre>`
    },
    {
      title: "Interview Preparation",
      icon: "&#127908;",
      tag: "Interview",
      content: `<div class="qa-block">
<p class="qa-q">Q: How do you check which port a process is listening on?</p>
<p class="qa-a">A: <code>sudo netstat -tlnp</code> or <code>sudo ss -tlnp</code>. These show all TCP listening ports with the process name and PID.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is the difference between kill and kill -9?</p>
<p class="qa-a">A: <code>kill</code> sends SIGTERM (signal 15), which asks the process to gracefully terminate. <code>kill -9</code> sends SIGKILL, which forcefully terminates the process immediately — it cannot be caught or ignored.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How do you check disk usage on a Linux server?</p>
<p class="qa-a">A: <code>df -h</code> for filesystem-level usage, <code>du -sh /path</code> for directory-level usage. For finding large files: <code>find / -type f -size +100M</code>.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: Explain the difference between > and >> in bash.</p>
<p class="qa-a">A: <code>></code> redirects output to a file, overwriting it. <code>>></code> appends to the file without overwriting existing content.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is a zombie process?</p>
<p class="qa-a">A: A zombie process is one that has completed execution but still has an entry in the process table because its parent hasn't read its exit status. It consumes no resources but occupies a PID. Fix: kill the parent process or wait for it to read the status.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How do you schedule a task to run every day at 3 AM?</p>
<p class="qa-a">A: Add to crontab with <code>crontab -e</code>: <code>0 3 * * * /path/to/script.sh</code></p>
</div>`
    },
    {
      title: "Time Split (10 Hours)",
      icon: "&#9200;",
      tag: "Schedule",
      content: `<div class="time-split-grid">
<div class="time-split-item"><span class="ts-hours">3h</span><span class="ts-label">Theory & Reading</span></div>
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Hands-On Practice</span></div>
<div class="time-split-item"><span class="ts-hours">2h</span><span class="ts-label">Project Work</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Interview Prep</span></div>
</div>`
    }
  ]
},

// ===================== WEEK 3 =====================
{
  week: 3,
  title: "Shell Scripting",
  subtitle: "Write powerful Bash scripts to automate tasks",
  difficulty: "beginner",
  tools: ["Bash", "ShellCheck", "VS Code"],
  timeSplit: { theory: 3, handson: 4, interview: 1, project: 2 },
  checkpoints: [
    "Write Bash scripts with variables and conditions",
    "Use loops and functions",
    "Handle command-line arguments",
    "Process text with awk and sed",
    "Debug shell scripts"
  ],
  sections: [
    {
      title: "Learning Objectives",
      icon: "&#127919;",
      tag: "Goals",
      content: `<ul>
<li>Write robust Bash scripts from scratch</li>
<li>Use variables, conditionals, loops, and functions</li>
<li>Handle command-line arguments and user input</li>
<li>Process text files with awk, sed, and grep</li>
<li>Implement error handling and debugging</li>
<li>Automate real-world tasks</li>
</ul>`
    },
    {
      title: "Theory — Bash Scripting Fundamentals",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Script Structure</h4>
<pre><code>#!/bin/bash
# The shebang (#!/bin/bash) tells the system which interpreter to use

# This is a comment
echo "Hello, DevOps!"    # Inline comment</code></pre>

<h4>Variables</h4>
<pre><code>#!/bin/bash

# Variable assignment (NO spaces around =)
name="DevOps Engineer"
count=42
today=$(date +%Y-%m-%d)    # Command substitution

# Using variables
echo "Role: $name"
echo "Count: \${count}"      # Braces for clarity
echo "Date: $today"

# Read-only variables
readonly PI=3.14159

# Environment variables
export MY_VAR="shared"      # Available to child processes
echo "$HOME"                # Built-in env vars
echo "$USER"
echo "$PATH"
echo "$PWD"

# Special variables
echo "$0"     # Script name
echo "$1"     # First argument
echo "$#"     # Number of arguments
echo "$@"     # All arguments as separate words
echo "$?"     # Exit status of last command
echo "$$"     # Current script PID</code></pre>

<h4>String Operations</h4>
<pre><code>str="Hello DevOps World"

# Length
echo \${#str}                    # 17

# Substring
echo \${str:6:6}                 # DevOps

# Replace
echo \${str/DevOps/Cloud}        # Hello Cloud World

# Default values
echo \${UNDEFINED_VAR:-"default"}  # Use default if unset
echo \${UNDEFINED_VAR:="default"}  # Set and use default if unset</code></pre>

<h4>Conditionals</h4>
<pre><code>#!/bin/bash

# if-elif-else
age=25
if [ $age -lt 18 ]; then
    echo "Junior"
elif [ $age -lt 30 ]; then
    echo "Mid-level"
else
    echo "Senior"
fi

# String comparison
name="admin"
if [ "$name" = "admin" ]; then
    echo "Welcome, admin!"
fi

# File tests
if [ -f "/etc/passwd" ]; then
    echo "File exists"
fi

if [ -d "/home" ]; then
    echo "Directory exists"
fi

if [ -x "script.sh" ]; then
    echo "File is executable"
fi

# Numeric comparisons
# -eq (equal), -ne (not equal), -lt (less than)
# -gt (greater than), -le (less or equal), -ge (greater or equal)

# Logical operators
if [ $age -gt 18 ] && [ $age -lt 65 ]; then
    echo "Working age"
fi

# Modern test syntax [[ ]] (preferred)
if [[ "$name" == "admin" && -f "/etc/passwd" ]]; then
    echo "Admin and file exists"
fi</code></pre>

<h4>Loops</h4>
<pre><code>#!/bin/bash

# For loop
for i in 1 2 3 4 5; do
    echo "Number: $i"
done

# C-style for loop
for ((i=0; i<10; i++)); do
    echo "Index: $i"
done

# Loop over files
for file in /etc/*.conf; do
    echo "Config: $file"
done

# While loop
count=0
while [ $count -lt 5 ]; do
    echo "Count: $count"
    ((count++))
done

# Reading file line by line
while IFS= read -r line; do
    echo "Line: $line"
done < input.txt

# Until loop (opposite of while)
until [ $count -ge 10 ]; do
    ((count++))
done

# Loop control
for i in $(seq 1 20); do
    if [ $i -eq 5 ]; then
        continue    # Skip this iteration
    fi
    if [ $i -eq 15 ]; then
        break       # Exit loop
    fi
    echo $i
done</code></pre>

<h4>Functions</h4>
<pre><code>#!/bin/bash

# Define a function
greet() {
    local name=$1    # local variable
    echo "Hello, $name!"
}

# Call the function
greet "DevOps Engineer"

# Function with return value
is_even() {
    if [ $(($1 % 2)) -eq 0 ]; then
        return 0    # true (success)
    else
        return 1    # false (failure)
    fi
}

if is_even 4; then
    echo "4 is even"
fi

# Function returning a string (via echo)
get_ip() {
    hostname -I | awk '{print $1}'
}
my_ip=$(get_ip)
echo "My IP: $my_ip"</code></pre>

<h4>Arrays</h4>
<pre><code>#!/bin/bash

# Define array
servers=("web01" "web02" "db01" "cache01")

# Access elements
echo \${servers[0]}          # web01
echo \${servers[@]}          # all elements
echo \${#servers[@]}         # array length

# Add element
servers+=("monitor01")

# Loop over array
for server in "\${servers[@]}"; do
    echo "Pinging $server..."
done

# Associative arrays (Bash 4+)
declare -A config
config[host]="localhost"
config[port]=8080
config[env]="production"

for key in "\${!config[@]}"; do
    echo "$key = \${config[$key]}"
done</code></pre>`
    },
    {
      title: "Theory — Error Handling & Debugging",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Exit Codes</h4>
<pre><code># Every command returns an exit code
# 0 = success, non-zero = failure

ls /nonexistent
echo $?    # 2 (error)

ls /tmp
echo $?    # 0 (success)

# Set exit code in your script
exit 0     # success
exit 1     # general error</code></pre>

<h4>Error Handling</h4>
<pre><code>#!/bin/bash

# Exit on any error
set -e

# Exit on undefined variable
set -u

# Fail on pipe errors
set -o pipefail

# Combined (recommended for all scripts)
set -euo pipefail

# Trap errors
trap 'echo "Error on line $LINENO"; exit 1' ERR

# Custom error handling
run_command() {
    if ! "$@"; then
        echo "FAILED: $*" >&2
        return 1
    fi
}

run_command ls /nonexistent</code></pre>

<h4>Debugging</h4>
<pre><code># Enable debug mode (prints each command)
bash -x script.sh

# Debug specific section
set -x    # start debug
# ... code to debug ...
set +x    # stop debug

# Verbose mode
bash -v script.sh</code></pre>

<div class="callout callout-tip">
<strong>Best Practice:</strong> Always start your scripts with <code>set -euo pipefail</code> and include a trap for error handling. This prevents silent failures.
</div>`
    },
    {
      title: "Hands-On Tasks",
      icon: "&#128295;",
      tag: "Practice",
      content: `<h4>Task 1: User Management Script</h4>
<pre><code>#!/bin/bash
# user_manager.sh — Add, delete, or list users

set -euo pipefail

case "\${1:-}" in
    add)
        if [ -z "\${2:-}" ]; then echo "Usage: $0 add username"; exit 1; fi
        sudo useradd -m "$2" && echo "User $2 created"
        ;;
    delete)
        if [ -z "\${2:-}" ]; then echo "Usage: $0 delete username"; exit 1; fi
        sudo userdel -r "$2" && echo "User $2 deleted"
        ;;
    list)
        awk -F: '$3 >= 1000 {print $1}' /etc/passwd
        ;;
    *)
        echo "Usage: $0 {add|delete|list} [username]"
        exit 1
        ;;
esac</code></pre>

<h4>Task 2: Backup Script with Rotation</h4>
<pre><code>#!/bin/bash
# backup.sh — Backup a directory with date stamp and rotation

set -euo pipefail

SOURCE="\${1:?Usage: $0 source_dir backup_dir}"
DEST="\${2:?Usage: $0 source_dir backup_dir}"
KEEP=5
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_NAME="backup_\${DATE}.tar.gz"

mkdir -p "$DEST"

echo "Creating backup of $SOURCE..."
tar -czf "\${DEST}/\${BACKUP_NAME}" -C "$(dirname "$SOURCE")" "$(basename "$SOURCE")"
echo "Backup created: \${DEST}/\${BACKUP_NAME}"

# Rotate old backups
BACKUP_COUNT=$(ls -1 "\${DEST}"/backup_*.tar.gz 2>/dev/null | wc -l)
if [ "$BACKUP_COUNT" -gt "$KEEP" ]; then
    echo "Rotating backups (keeping last $KEEP)..."
    ls -1t "\${DEST}"/backup_*.tar.gz | tail -n +$((KEEP+1)) | xargs rm -f
fi

echo "Done. Current backups:"
ls -lh "\${DEST}"/backup_*.tar.gz</code></pre>

<h4>Task 3: System Monitor Dashboard</h4>
<pre><code>#!/bin/bash
# monitor.sh — Live system monitoring

while true; do
    clear
    echo "╔══════════════════════════════════╗"
    echo "║     SYSTEM MONITOR DASHBOARD     ║"
    echo "║     $(date +%H:%M:%S)                       ║"
    echo "╠══════════════════════════════════╣"
    echo "║ CPU Load: $(uptime | awk -F'load average:' '{print $2}')"
    echo "║ Memory:   $(free -h | awk '/Mem:/{print $3"/"$2}')"
    echo "║ Disk:     $(df -h / | awk 'NR==2{print $5" used"}')"
    echo "║ Procs:    $(ps aux | wc -l) running"
    echo "╚══════════════════════════════════╝"
    sleep 2
done</code></pre>`
    },
    {
      title: "Real-World Project",
      icon: "&#128188;",
      tag: "Project",
      content: `<h4>Project: Server Provisioning Script</h4>
<p>Create a script that sets up a fresh server — a task every DevOps engineer does.</p>

<pre><code>#!/bin/bash
# provision.sh — Initial server setup script
set -euo pipefail

log() { echo "[$(date +%H:%M:%S)] $*"; }

log "Starting server provisioning..."

# 1. Update system
log "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# 2. Install essential tools
log "Installing essential tools..."
sudo apt install -y \\
    curl wget git vim htop tree \\
    net-tools unzip jq

# 3. Set timezone
log "Setting timezone..."
sudo timedatectl set-timezone UTC

# 4. Configure firewall
log "Configuring firewall..."
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw --force enable

# 5. Create deploy user
log "Creating deploy user..."
if ! id "deploy" &>/dev/null; then
    sudo useradd -m -s /bin/bash deploy
    sudo usermod -aG sudo deploy
    log "User 'deploy' created"
else
    log "User 'deploy' already exists"
fi

# 6. Harden SSH
log "Hardening SSH configuration..."
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.backup
sudo sed -i 's/#PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config
sudo sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
sudo systemctl restart sshd

# 7. Set up automatic updates
log "Configuring automatic security updates..."
sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades

log "Server provisioning complete!"</code></pre>

<p><strong>Expected Outcome:</strong> A single script that transforms a bare server into a hardened, tool-ready machine. This is the foundation for Infrastructure as Code.</p>`
    },
    {
      title: "Interview Preparation",
      icon: "&#127908;",
      tag: "Interview",
      content: `<div class="qa-block">
<p class="qa-q">Q: What does <code>set -euo pipefail</code> do?</p>
<p class="qa-a">A: <code>-e</code> exits on any error, <code>-u</code> treats undefined variables as errors, <code>-o pipefail</code> makes pipes fail if any command in the pipeline fails (not just the last one).</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is the difference between $@ and $* ?</p>
<p class="qa-a">A: When quoted, <code>"$@"</code> expands each argument as a separate word (preserving spaces in individual args), while <code>"$*"</code> expands all arguments as a single string.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How do you read a file line by line in Bash?</p>
<p class="qa-a">A: <code>while IFS= read -r line; do echo "$line"; done < file.txt</code>. The <code>IFS=</code> prevents leading/trailing whitespace trimming, and <code>-r</code> prevents backslash interpretation.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How do you pass output of one command as an argument to another?</p>
<p class="qa-a">A: Command substitution: <code>ls -la $(which python)</code> or backticks <code>ls -la \`which python\`</code>. You can also use xargs: <code>find . -name "*.log" | xargs rm</code>.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: Write a one-liner to find the 5 largest files in /var/log.</p>
<p class="qa-a">A: <code>find /var/log -type f -exec du -h {} + | sort -rh | head -5</code></p>
</div>`
    },
    {
      title: "Time Split (10 Hours)",
      icon: "&#9200;",
      tag: "Schedule",
      content: `<div class="time-split-grid">
<div class="time-split-item"><span class="ts-hours">3h</span><span class="ts-label">Theory & Reading</span></div>
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Hands-On Practice</span></div>
<div class="time-split-item"><span class="ts-hours">2h</span><span class="ts-label">Project Work</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Interview Prep</span></div>
</div>`
    }
  ]
},

// ===================== WEEK 4 =====================
{
  week: 4,
  title: "Networking Fundamentals",
  subtitle: "Understand how computers communicate — essential for DevOps",
  difficulty: "beginner",
  tools: ["ping", "curl", "netstat", "ss", "dig", "iptables"],
  timeSplit: { theory: 4, handson: 3, interview: 2, project: 1 },
  checkpoints: [
    "Understand OSI & TCP/IP models",
    "Work with IP addresses and subnetting",
    "Use DNS, HTTP, and TCP/UDP",
    "Debug network issues",
    "Configure basic firewalls"
  ],
  sections: [
    {
      title: "Learning Objectives",
      icon: "&#127919;",
      tag: "Goals",
      content: `<ul>
<li>Understand the OSI and TCP/IP networking models</li>
<li>Work with IP addresses, subnets, and CIDR</li>
<li>Explain DNS resolution and HTTP protocol</li>
<li>Debug common networking issues</li>
<li>Understand TCP vs UDP</li>
<li>Configure basic firewall rules</li>
</ul>`
    },
    {
      title: "Theory — Networking Models",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>OSI Model (7 Layers)</h4>
<p>The OSI model is a conceptual framework that describes how data travels over a network.</p>
<table>
<tr><th>Layer</th><th>Name</th><th>Function</th><th>Example</th></tr>
<tr><td>7</td><td>Application</td><td>User-facing protocols</td><td>HTTP, FTP, SSH, DNS</td></tr>
<tr><td>6</td><td>Presentation</td><td>Data format, encryption</td><td>SSL/TLS, JPEG, JSON</td></tr>
<tr><td>5</td><td>Session</td><td>Manage connections</td><td>NetBIOS, RPC</td></tr>
<tr><td>4</td><td>Transport</td><td>End-to-end delivery</td><td>TCP, UDP</td></tr>
<tr><td>3</td><td>Network</td><td>Routing & addressing</td><td>IP, ICMP</td></tr>
<tr><td>2</td><td>Data Link</td><td>Node-to-node delivery</td><td>Ethernet, MAC</td></tr>
<tr><td>1</td><td>Physical</td><td>Bits on the wire</td><td>Cables, Wi-Fi</td></tr>
</table>

<div class="callout callout-tip">
<strong>Mnemonic:</strong> "Please Do Not Throw Sausage Pizza Away" (Physical → Application)
</div>

<h4>TCP/IP Model (Practical Model)</h4>
<table>
<tr><th>Layer</th><th>OSI Equivalent</th><th>Protocols</th></tr>
<tr><td>Application</td><td>Layers 5-7</td><td>HTTP, SSH, DNS, FTP</td></tr>
<tr><td>Transport</td><td>Layer 4</td><td>TCP, UDP</td></tr>
<tr><td>Internet</td><td>Layer 3</td><td>IP, ICMP, ARP</td></tr>
<tr><td>Network Access</td><td>Layers 1-2</td><td>Ethernet, Wi-Fi</td></tr>
</table>

<h4>TCP vs UDP</h4>
<table>
<tr><th>Feature</th><th>TCP</th><th>UDP</th></tr>
<tr><td>Connection</td><td>Connection-oriented (3-way handshake)</td><td>Connectionless</td></tr>
<tr><td>Reliability</td><td>Guaranteed delivery, ordered</td><td>No guarantees</td></tr>
<tr><td>Speed</td><td>Slower (overhead)</td><td>Faster</td></tr>
<tr><td>Use Cases</td><td>Web, email, file transfer</td><td>DNS, streaming, gaming</td></tr>
</table>

<h4>TCP Three-Way Handshake</h4>
<pre><code>Client              Server
  |--- SYN ----------->|    "Hey, want to connect?"
  |<-- SYN-ACK --------|    "Sure, I'm ready"
  |--- ACK ----------->|    "Great, let's go!"
  |<== Data Transfer ==>|</code></pre>`
    },
    {
      title: "Theory — IP Addressing & Subnetting",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>IPv4 Address</h4>
<p>An IPv4 address is a 32-bit number written as four octets: <code>192.168.1.100</code></p>
<pre><code>192     .168    .1      .100
11000000.10101000.00000001.01100100
(each octet is 8 bits, range 0-255)</code></pre>

<h4>Public vs Private IP Addresses</h4>
<table>
<tr><th>Type</th><th>Range</th><th>Use</th></tr>
<tr><td>Private (Class A)</td><td>10.0.0.0 - 10.255.255.255</td><td>Large networks</td></tr>
<tr><td>Private (Class B)</td><td>172.16.0.0 - 172.31.255.255</td><td>Medium networks</td></tr>
<tr><td>Private (Class C)</td><td>192.168.0.0 - 192.168.255.255</td><td>Home/small office</td></tr>
<tr><td>Loopback</td><td>127.0.0.0 - 127.255.255.255</td><td>Local machine</td></tr>
<tr><td>Public</td><td>Everything else</td><td>Internet-facing</td></tr>
</table>

<h4>CIDR Notation & Subnetting</h4>
<pre><code>192.168.1.0/24

/24 means the first 24 bits are the network portion
Subnet mask: 255.255.255.0
Available hosts: 254 (2^8 - 2)

Common CIDR blocks:
/32  = 1 IP (single host)
/24  = 256 IPs (254 usable)
/16  = 65,536 IPs
/8   = 16,777,216 IPs

Example:
10.0.0.0/16 = 10.0.0.0 to 10.0.255.255</code></pre>

<h4>Important Network Concepts</h4>
<ul>
<li><strong>Gateway:</strong> The router that connects your network to other networks (usually x.x.x.1)</li>
<li><strong>Subnet:</strong> A logical subdivision of an IP network</li>
<li><strong>NAT:</strong> Network Address Translation — maps private IPs to public IPs</li>
<li><strong>DHCP:</strong> Automatically assigns IP addresses to devices</li>
</ul>`
    },
    {
      title: "Theory — DNS & HTTP",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>DNS (Domain Name System)</h4>
<p>DNS translates domain names (google.com) to IP addresses (142.250.80.46).</p>

<h5>DNS Resolution Process</h5>
<pre><code>1. Browser checks its cache
2. OS checks /etc/hosts file
3. OS asks the configured DNS resolver
4. Resolver asks Root DNS server → "Where is .com?"
5. Root points to .com TLD server
6. TLD server points to google.com nameserver
7. Authoritative nameserver returns the IP
8. Result is cached at each level</code></pre>

<h5>DNS Record Types</h5>
<table>
<tr><th>Type</th><th>Purpose</th><th>Example</th></tr>
<tr><td>A</td><td>Maps domain to IPv4</td><td>example.com → 1.2.3.4</td></tr>
<tr><td>AAAA</td><td>Maps domain to IPv6</td><td>example.com → 2001:db8::1</td></tr>
<tr><td>CNAME</td><td>Alias for another domain</td><td>www.example.com → example.com</td></tr>
<tr><td>MX</td><td>Mail server</td><td>example.com → mail.example.com</td></tr>
<tr><td>TXT</td><td>Text records</td><td>SPF, DKIM verification</td></tr>
<tr><td>NS</td><td>Nameserver</td><td>example.com → ns1.provider.com</td></tr>
</table>

<h5>DNS Commands</h5>
<pre><code># Lookup IP address
nslookup google.com
dig google.com

# Query specific record type
dig google.com MX
dig google.com TXT

# Trace full resolution
dig +trace google.com

# Check /etc/hosts
cat /etc/hosts

# Check DNS config
cat /etc/resolv.conf</code></pre>

<h4>HTTP Protocol</h4>
<h5>HTTP Methods</h5>
<table>
<tr><th>Method</th><th>Purpose</th><th>Idempotent</th></tr>
<tr><td>GET</td><td>Retrieve data</td><td>Yes</td></tr>
<tr><td>POST</td><td>Create resource</td><td>No</td></tr>
<tr><td>PUT</td><td>Update/replace resource</td><td>Yes</td></tr>
<tr><td>DELETE</td><td>Remove resource</td><td>Yes</td></tr>
<tr><td>PATCH</td><td>Partial update</td><td>No</td></tr>
</table>

<h5>HTTP Status Codes</h5>
<table>
<tr><th>Range</th><th>Category</th><th>Examples</th></tr>
<tr><td>1xx</td><td>Informational</td><td>100 Continue</td></tr>
<tr><td>2xx</td><td>Success</td><td>200 OK, 201 Created, 204 No Content</td></tr>
<tr><td>3xx</td><td>Redirect</td><td>301 Moved, 302 Found, 304 Not Modified</td></tr>
<tr><td>4xx</td><td>Client Error</td><td>400 Bad Request, 401 Unauthorized, 404 Not Found</td></tr>
<tr><td>5xx</td><td>Server Error</td><td>500 Internal, 502 Bad Gateway, 503 Unavailable</td></tr>
</table>

<pre><code># HTTP request with curl
curl -v https://httpbin.org/get

# POST request
curl -X POST https://httpbin.org/post \\
  -H "Content-Type: application/json" \\
  -d '{"name": "devops"}'

# Headers only
curl -I https://google.com

# Follow redirects
curl -L https://google.com

# Download file
curl -O https://example.com/file.tar.gz
wget https://example.com/file.tar.gz</code></pre>`
    },
    {
      title: "Hands-On Tasks",
      icon: "&#128295;",
      tag: "Practice",
      content: `<h4>Task 1: Network Diagnostics</h4>
<pre><code># Check your IP configuration
ip addr show
# or: ifconfig

# Test connectivity
ping -c 4 google.com
ping -c 4 8.8.8.8

# Trace route
traceroute google.com
# or: tracepath google.com

# Check open ports
ss -tlnp
# or: netstat -tlnp

# Check which process uses a port
sudo lsof -i :80</code></pre>

<h4>Task 2: DNS Practice</h4>
<pre><code># Resolve domains
dig google.com +short
dig github.com MX +short

# Add a local DNS entry
echo "127.0.0.1 myapp.local" | sudo tee -a /etc/hosts
ping -c 2 myapp.local

# Remove it when done
sudo sed -i '/myapp.local/d' /etc/hosts</code></pre>

<h4>Task 3: HTTP Exploration</h4>
<pre><code># Inspect HTTP headers
curl -I https://github.com

# Make API calls
curl -s https://httpbin.org/ip | jq .
curl -s https://httpbin.org/headers | jq .

# Test different status codes
curl -s -o /dev/null -w "%{http_code}" https://httpbin.org/status/404</code></pre>

<h4>Task 4: Firewall Basics</h4>
<pre><code># Check firewall status
sudo ufw status

# Allow SSH and HTTP
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Deny a specific port
sudo ufw deny 3306/tcp

# Enable firewall
sudo ufw enable
sudo ufw status verbose</code></pre>`
    },
    {
      title: "Interview Preparation",
      icon: "&#127908;",
      tag: "Interview",
      content: `<div class="qa-block">
<p class="qa-q">Q: What happens when you type google.com in a browser?</p>
<p class="qa-a">A: 1) Browser checks DNS cache, 2) DNS resolution occurs (recursive query through root, TLD, authoritative servers), 3) TCP connection via 3-way handshake, 4) TLS handshake for HTTPS, 5) HTTP GET request sent, 6) Server processes and returns response, 7) Browser renders HTML/CSS/JS.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is the difference between TCP and UDP?</p>
<p class="qa-a">A: TCP is connection-oriented, reliable (guarantees delivery and ordering), but slower. UDP is connectionless, faster, but doesn't guarantee delivery. TCP is used for web/email/file transfer; UDP for DNS, streaming, and gaming.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is a CIDR block and what does /24 mean?</p>
<p class="qa-a">A: CIDR (Classless Inter-Domain Routing) notation specifies an IP range. /24 means the first 24 bits are the network prefix, leaving 8 bits for hosts = 256 addresses (254 usable). Example: 10.0.0.0/24 covers 10.0.0.0 to 10.0.0.255.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is the difference between a public and private IP?</p>
<p class="qa-a">A: Private IPs (10.x.x.x, 172.16-31.x.x, 192.168.x.x) are used within local networks and are not routable on the internet. Public IPs are globally unique and internet-facing. NAT translates between them.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How do you troubleshoot a server that is unreachable?</p>
<p class="qa-a">A: Systematic approach: 1) ping the server (is it up?), 2) check DNS resolution (dig/nslookup), 3) check the specific port (telnet/nc), 4) traceroute to find where packets stop, 5) check firewall rules, 6) check service status on the server, 7) review logs.</p>
</div>`
    },
    {
      title: "Time Split (10 Hours)",
      icon: "&#9200;",
      tag: "Schedule",
      content: `<div class="time-split-grid">
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Theory & Reading</span></div>
<div class="time-split-item"><span class="ts-hours">3h</span><span class="ts-label">Hands-On Practice</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Project Work</span></div>
<div class="time-split-item"><span class="ts-hours">2h</span><span class="ts-label">Interview Prep</span></div>
</div>`
    }
  ]
},

// ===================== WEEK 5 =====================
{
  week: 5,
  title: "Git & GitHub",
  subtitle: "Master version control — the backbone of modern software development",
  difficulty: "beginner",
  tools: ["Git", "GitHub", "VS Code"],
  timeSplit: { theory: 3, handson: 4, interview: 1, project: 2 },
  checkpoints: [
    "Initialize and manage Git repos",
    "Work with branches and merges",
    "Collaborate via GitHub pull requests",
    "Resolve merge conflicts",
    "Use Git best practices"
  ],
  sections: [
    {
      title: "Learning Objectives",
      icon: "&#127919;",
      tag: "Goals",
      content: `<ul>
<li>Understand version control concepts</li>
<li>Initialize repos, commit, and manage history</li>
<li>Create branches and merge strategies</li>
<li>Collaborate with GitHub (PRs, issues, forks)</li>
<li>Resolve merge conflicts confidently</li>
<li>Follow Git best practices and workflows</li>
</ul>`
    },
    {
      title: "Theory — Git Fundamentals",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>What is Git?</h4>
<p>Git is a distributed version control system that tracks changes in code. Every developer has a full copy of the repository.</p>

<h4>Git Architecture</h4>
<pre><code>Working Directory → Staging Area (Index) → Local Repo → Remote Repo
    (edit)            (git add)            (git commit)  (git push)</code></pre>

<h4>Initial Setup</h4>
<pre><code>git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git config --global core.editor "vim"
git config --list</code></pre>

<h4>Core Commands</h4>
<pre><code># Initialize a repository
git init
git init my-project

# Clone existing repo
git clone https://github.com/user/repo.git

# Check status
git status

# Stage files
git add file.txt          # stage one file
git add .                 # stage everything
git add *.js              # stage by pattern

# Commit
git commit -m "Add login feature"

# View history
git log
git log --oneline
git log --oneline --graph --all

# View changes
git diff                  # unstaged changes
git diff --staged         # staged changes
git diff main..feature    # between branches

# Undo changes
git checkout -- file.txt  # discard changes in file
git reset HEAD file.txt   # unstage a file
git reset --soft HEAD~1   # undo last commit, keep changes staged
git reset --hard HEAD~1   # undo last commit, discard changes</code></pre>

<h4>.gitignore</h4>
<pre><code># Create .gitignore to exclude files
node_modules/
*.log
.env
dist/
__pycache__/
*.pyc
.DS_Store
.idea/
.vscode/</code></pre>

<h4>Branching</h4>
<pre><code># Create and switch branches
git branch feature-login       # create branch
git checkout feature-login     # switch to branch
git checkout -b feature-login  # create + switch (shorthand)
git switch feature-login       # modern syntax
git switch -c new-feature      # create + switch (modern)

# List branches
git branch                     # local branches
git branch -a                  # all (including remote)

# Merge
git checkout main
git merge feature-login        # merge feature into main

# Delete branch
git branch -d feature-login    # delete merged branch
git branch -D feature-login    # force delete</code></pre>

<h4>Merge Conflicts</h4>
<pre><code># When Git can't auto-merge, you'll see:
<<<<<<< HEAD
your changes
=======
their changes
>>>>>>> feature-branch

# Resolution steps:
# 1. Open the conflicted file
# 2. Choose which changes to keep (or combine)
# 3. Remove the conflict markers
# 4. Stage and commit

git add resolved-file.txt
git commit -m "Resolve merge conflict"</code></pre>

<h4>Git Stash</h4>
<pre><code># Save uncommitted changes temporarily
git stash
git stash save "work in progress on auth"

# List stashes
git stash list

# Restore stash
git stash pop             # restore and remove from stash
git stash apply           # restore but keep in stash

# Drop a stash
git stash drop stash@{0}</code></pre>`
    },
    {
      title: "Theory — GitHub Collaboration",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Remote Repositories</h4>
<pre><code># Add remote
git remote add origin https://github.com/user/repo.git

# Push
git push -u origin main        # first push (set upstream)
git push                       # subsequent pushes

# Pull (fetch + merge)
git pull origin main

# Fetch (download without merging)
git fetch origin

# View remotes
git remote -v</code></pre>

<h4>Pull Request Workflow</h4>
<pre><code># 1. Create a feature branch
git checkout -b feature/add-auth

# 2. Make changes and commit
git add .
git commit -m "Add authentication module"

# 3. Push branch to GitHub
git push -u origin feature/add-auth

# 4. Create Pull Request on GitHub
# - Go to the repo on GitHub
# - Click "Compare & pull request"
# - Add title, description, reviewers
# - Wait for review and CI checks

# 5. After approval, merge on GitHub
# 6. Clean up local branch
git checkout main
git pull origin main
git branch -d feature/add-auth</code></pre>

<h4>Git Workflows</h4>
<table>
<tr><th>Workflow</th><th>Description</th><th>Best For</th></tr>
<tr><td>Feature Branch</td><td>One branch per feature, merge to main</td><td>Most teams</td></tr>
<tr><td>Gitflow</td><td>main, develop, feature, release, hotfix branches</td><td>Release-based products</td></tr>
<tr><td>Trunk-Based</td><td>Small, frequent commits to main</td><td>CI/CD teams</td></tr>
</table>

<h4>Writing Good Commit Messages</h4>
<pre><code># Format:
# type: short summary (under 50 chars)
#
# Detailed explanation if needed (wrap at 72 chars)

# Examples:
feat: add user authentication with JWT
fix: resolve database connection timeout
docs: update API documentation
refactor: extract payment processing to service
chore: update dependencies to latest versions
test: add unit tests for order module</code></pre>`
    },
    {
      title: "Hands-On Tasks",
      icon: "&#128295;",
      tag: "Practice",
      content: `<h4>Task 1: Create and Manage a Repository</h4>
<pre><code>mkdir ~/devops-lab/git-practice && cd ~/devops-lab/git-practice
git init

echo "# My DevOps Project" > README.md
echo "node_modules/" > .gitignore
git add .
git commit -m "Initial commit"
git log --oneline</code></pre>

<h4>Task 2: Branch and Merge Practice</h4>
<pre><code># Create feature branch
git checkout -b feature/add-config
echo 'PORT=8080' > config.env
echo 'DB_HOST=localhost' >> config.env
git add config.env
git commit -m "feat: add configuration file"

# Create another branch from main
git checkout main
git checkout -b feature/add-docs
echo "## Installation" >> README.md
echo "Run npm install" >> README.md
git add README.md
git commit -m "docs: add installation instructions"

# Merge both into main
git checkout main
git merge feature/add-config
git merge feature/add-docs
git log --oneline --graph --all</code></pre>

<h4>Task 3: Simulate and Resolve a Merge Conflict</h4>
<pre><code># On main
echo "version=1.0" > version.txt
git add version.txt
git commit -m "Add version file"

# Create branch A
git checkout -b branch-a
echo "version=2.0" > version.txt
git commit -am "Bump to v2.0"

# Create branch B from main
git checkout main
git checkout -b branch-b
echo "version=3.0" > version.txt
git commit -am "Bump to v3.0"

# Merge branch-a (succeeds)
git checkout main
git merge branch-a

# Merge branch-b (CONFLICT!)
git merge branch-b
# Resolve manually, then:
# git add version.txt
# git commit -m "Resolve merge conflict"</code></pre>`
    },
    {
      title: "Interview Preparation",
      icon: "&#127908;",
      tag: "Interview",
      content: `<div class="qa-block">
<p class="qa-q">Q: What is the difference between git merge and git rebase?</p>
<p class="qa-a">A: <code>git merge</code> creates a merge commit that combines two branches, preserving history. <code>git rebase</code> replays commits from one branch on top of another, creating a linear history. Merge is safer for shared branches; rebase is cleaner for feature branches before merging.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is a pull request?</p>
<p class="qa-a">A: A pull request (PR) is a GitHub feature for proposing code changes. You push a branch, create a PR, teammates review the code, CI runs tests, and after approval the branch is merged. It's the standard collaboration workflow.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How do you revert a commit that's already been pushed?</p>
<p class="qa-a">A: Use <code>git revert &lt;commit-hash&gt;</code> which creates a new commit that undoes the changes. This is safe for shared branches. Avoid <code>git reset</code> on pushed commits as it rewrites history.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is the difference between git pull and git fetch?</p>
<p class="qa-a">A: <code>git fetch</code> downloads new data from the remote but doesn't modify your working files. <code>git pull</code> does a fetch AND merges the remote changes into your current branch. Fetch is safer when you want to inspect changes first.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: Explain the git stash command.</p>
<p class="qa-a">A: <code>git stash</code> temporarily saves uncommitted changes (staged and unstaged) so you can switch branches or pull updates cleanly. Use <code>git stash pop</code> to restore them later.</p>
</div>`
    },
    {
      title: "Time Split (10 Hours)",
      icon: "&#9200;",
      tag: "Schedule",
      content: `<div class="time-split-grid">
<div class="time-split-item"><span class="ts-hours">3h</span><span class="ts-label">Theory & Reading</span></div>
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Hands-On Practice</span></div>
<div class="time-split-item"><span class="ts-hours">2h</span><span class="ts-label">Project Work</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Interview Prep</span></div>
</div>`
    }
  ]
},

// ===================== WEEK 6 =====================
{
  week: 6,
  title: "Docker Fundamentals",
  subtitle: "Containerize applications — the building block of modern DevOps",
  difficulty: "intermediate",
  tools: ["Docker", "Docker CLI", "Dockerfile"],
  timeSplit: { theory: 3, handson: 4, interview: 1, project: 2 },
  checkpoints: [
    "Understand containers vs VMs",
    "Run and manage Docker containers",
    "Write Dockerfiles",
    "Manage images and volumes",
    "Understand Docker networking"
  ],
  sections: [
    {
      title: "Learning Objectives",
      icon: "&#127919;",
      tag: "Goals",
      content: `<ul>
<li>Understand containerization and why it matters</li>
<li>Install Docker and run containers</li>
<li>Write efficient Dockerfiles</li>
<li>Manage images, containers, volumes, and networks</li>
<li>Understand Docker architecture</li>
</ul>`
    },
    {
      title: "Theory — Containers & Docker",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>What is a Container?</h4>
<p>A container is a lightweight, standalone package that includes everything needed to run a piece of software: code, runtime, libraries, and settings. It runs in isolation but shares the host OS kernel.</p>

<h4>Containers vs Virtual Machines</h4>
<table>
<tr><th>Feature</th><th>Container</th><th>Virtual Machine</th></tr>
<tr><td>Boot time</td><td>Seconds</td><td>Minutes</td></tr>
<tr><td>Size</td><td>MBs</td><td>GBs</td></tr>
<tr><td>Isolation</td><td>Process-level</td><td>Full OS-level</td></tr>
<tr><td>OS</td><td>Shares host kernel</td><td>Own OS kernel</td></tr>
<tr><td>Performance</td><td>Near-native</td><td>Overhead from hypervisor</td></tr>
<tr><td>Density</td><td>Hundreds per host</td><td>Tens per host</td></tr>
</table>

<h4>Docker Architecture</h4>
<pre><code>┌─────────────────────────────┐
│       Docker Client         │ ← docker CLI commands
│       (docker CLI)          │
└──────────┬──────────────────┘
           │ REST API
┌──────────▼──────────────────┐
│       Docker Daemon         │ ← manages containers
│       (dockerd)             │
├─────────────────────────────┤
│  Images │ Containers │ Nets │
│  Volumes│            │      │
└─────────────────────────────┘
           │
┌──────────▼──────────────────┐
│    Container Runtime        │ ← containerd + runc
└─────────────────────────────┘</code></pre>

<h4>Key Concepts</h4>
<ul>
<li><strong>Image:</strong> A read-only template with instructions for creating a container (like a class)</li>
<li><strong>Container:</strong> A running instance of an image (like an object)</li>
<li><strong>Dockerfile:</strong> A text file with instructions to build an image</li>
<li><strong>Registry:</strong> A place to store images (Docker Hub, AWS ECR, etc.)</li>
<li><strong>Volume:</strong> Persistent storage for container data</li>
</ul>

<h4>Installing Docker</h4>
<pre><code># Ubuntu/Debian
sudo apt update
sudo apt install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker

# Add your user to docker group (avoid sudo)
sudo usermod -aG docker $USER
# Log out and back in

# Verify
docker --version
docker run hello-world</code></pre>`
    },
    {
      title: "Theory — Docker Commands",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Container Lifecycle</h4>
<pre><code># Run a container
docker run nginx                    # foreground
docker run -d nginx                 # detached (background)
docker run -d --name web nginx      # with a name
docker run -d -p 8080:80 nginx      # map port 8080→80
docker run -it ubuntu bash          # interactive terminal

# List containers
docker ps                           # running containers
docker ps -a                        # all containers

# Stop / Start / Remove
docker stop web
docker start web
docker restart web
docker rm web                       # remove stopped container
docker rm -f web                    # force remove running container

# Execute command in running container
docker exec -it web bash
docker exec web cat /etc/nginx/nginx.conf

# Logs
docker logs web
docker logs -f web                  # follow logs
docker logs --tail 50 web           # last 50 lines

# Inspect
docker inspect web
docker stats                        # live resource usage</code></pre>

<h4>Image Management</h4>
<pre><code># Pull an image
docker pull nginx
docker pull nginx:1.25              # specific version
docker pull ubuntu:22.04

# List images
docker images

# Remove images
docker rmi nginx
docker image prune                  # remove unused images
docker system prune -a              # remove everything unused

# Tag and push
docker tag myapp:latest myrepo/myapp:v1.0
docker push myrepo/myapp:v1.0</code></pre>

<h4>Volumes (Persistent Data)</h4>
<pre><code># Create a volume
docker volume create mydata

# Mount volume to container
docker run -d -v mydata:/data nginx
docker run -d -v $(pwd)/html:/usr/share/nginx/html nginx  # bind mount

# List and inspect volumes
docker volume ls
docker volume inspect mydata

# Remove volume
docker volume rm mydata</code></pre>

<h4>Docker Networking</h4>
<pre><code># List networks
docker network ls

# Create a network
docker network create mynet

# Run containers on the same network
docker run -d --name web --network mynet nginx
docker run -d --name api --network mynet node:18

# Containers on same network can reach each other by name
# From api container: curl http://web:80

# Network types:
# bridge (default) — isolated network on the host
# host — share host's network (no isolation)
# none — no networking</code></pre>`
    },
    {
      title: "Theory — Dockerfiles",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Dockerfile Syntax</h4>
<pre><code># Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Set environment variable
ENV NODE_ENV=production

# Health check
HEALTHCHECK --interval=30s CMD curl -f http://localhost:3000/ || exit 1

# Command to run
CMD ["node", "server.js"]</code></pre>

<h4>Dockerfile Best Practices</h4>
<ol>
<li><strong>Use minimal base images:</strong> <code>alpine</code> variants are much smaller</li>
<li><strong>Order layers by change frequency:</strong> Put rarely-changing steps first for better caching</li>
<li><strong>Combine RUN commands:</strong> Each RUN creates a layer</li>
<li><strong>Use .dockerignore:</strong> Exclude unnecessary files from the build context</li>
<li><strong>Don't run as root:</strong> Create a non-root user</li>
<li><strong>Use multi-stage builds:</strong> Reduce final image size</li>
</ol>

<h4>Multi-Stage Build Example</h4>
<pre><code># Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
USER node
CMD ["node", "dist/server.js"]</code></pre>

<h4>.dockerignore</h4>
<pre><code>node_modules
npm-debug.log
.git
.env
Dockerfile
docker-compose.yml
README.md
.DS_Store</code></pre>

<h4>Build & Run</h4>
<pre><code># Build image
docker build -t myapp:v1 .
docker build -t myapp:v1 -f Dockerfile.prod .  # specific Dockerfile

# Run it
docker run -d -p 3000:3000 --name myapp myapp:v1</code></pre>`
    },
    {
      title: "Hands-On Tasks",
      icon: "&#128295;",
      tag: "Practice",
      content: `<h4>Task 1: Run Your First Containers</h4>
<pre><code># Run nginx web server
docker run -d -p 8080:80 --name myweb nginx
# Visit http://localhost:8080

# Run a Python container interactively
docker run -it python:3.11 python -c "print('Hello from Docker!')"

# Run MySQL
docker run -d --name mydb -e MYSQL_ROOT_PASSWORD=secret -p 3306:3306 mysql:8

# Check running containers
docker ps
docker logs myweb
docker stats</code></pre>

<h4>Task 2: Build a Custom Image</h4>
<pre><code># Create a project directory
mkdir ~/devops-lab/docker-app && cd ~/devops-lab/docker-app

# Create a simple Node.js app
cat > server.js << 'EOF'
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({
    message: 'Hello from Docker!',
    hostname: require('os').hostname(),
    time: new Date().toISOString()
  }));
});
server.listen(3000, () => console.log('Server running on port 3000'));
EOF

cat > package.json << 'EOF'
{"name": "docker-app", "version": "1.0.0", "main": "server.js"}
EOF

# Create Dockerfile
cat > Dockerfile << 'EOF'
FROM node:18-alpine
WORKDIR /app
COPY package.json .
COPY server.js .
EXPOSE 3000
CMD ["node", "server.js"]
EOF

# Build and run
docker build -t myapi:v1 .
docker run -d -p 3000:3000 --name myapi myapi:v1
curl http://localhost:3000</code></pre>

<h4>Task 3: Volume and Networking Practice</h4>
<pre><code># Create a network
docker network create app-net

# Run containers on the same network
docker run -d --name app-web --network app-net -p 80:80 nginx
docker run -d --name app-db --network app-net -e MYSQL_ROOT_PASSWORD=pass mysql:8

# Test connectivity
docker exec app-web ping -c 2 app-db</code></pre>`
    },
    {
      title: "Interview Preparation",
      icon: "&#127908;",
      tag: "Interview",
      content: `<div class="qa-block">
<p class="qa-q">Q: What is the difference between a Docker image and a container?</p>
<p class="qa-a">A: An image is a read-only template containing the application and its dependencies. A container is a running instance of an image. You can create multiple containers from the same image. Images are built from Dockerfiles and stored in registries.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is a multi-stage Docker build?</p>
<p class="qa-a">A: Multi-stage builds use multiple FROM statements in one Dockerfile. The first stage builds/compiles the application, and the final stage copies only the necessary artifacts. This significantly reduces the final image size by excluding build tools and dependencies.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How does Docker networking work?</p>
<p class="qa-a">A: Docker provides three network types: bridge (default, isolated network on host), host (shares host network stack), and none (no networking). Custom bridge networks allow containers to communicate by name. Docker uses iptables for port mapping.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is the difference between CMD and ENTRYPOINT?</p>
<p class="qa-a">A: CMD sets default arguments that can be overridden at runtime. ENTRYPOINT sets the main executable that always runs. They're often combined: ENTRYPOINT defines the command, CMD provides default arguments. Example: ENTRYPOINT ["python"], CMD ["app.py"].</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How do you persist data in Docker containers?</p>
<p class="qa-a">A: Containers are ephemeral — data is lost when they're removed. Use volumes (managed by Docker) or bind mounts (map host directory) to persist data. Volumes are preferred for production as Docker manages their lifecycle.</p>
</div>`
    },
    {
      title: "Time Split (10 Hours)",
      icon: "&#9200;",
      tag: "Schedule",
      content: `<div class="time-split-grid">
<div class="time-split-item"><span class="ts-hours">3h</span><span class="ts-label">Theory & Reading</span></div>
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Hands-On Practice</span></div>
<div class="time-split-item"><span class="ts-hours">2h</span><span class="ts-label">Project Work</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Interview Prep</span></div>
</div>`
    }
  ]
},

// ===================== WEEK 7 =====================
{
  week: 7,
  title: "Docker Compose & Advanced Docker",
  subtitle: "Orchestrate multi-container applications and production-ready Docker",
  difficulty: "intermediate",
  tools: ["Docker Compose", "Docker", "Docker Hub"],
  timeSplit: { theory: 3, handson: 4, interview: 1, project: 2 },
  checkpoints: [
    "Write Docker Compose files",
    "Manage multi-container apps",
    "Optimize Docker images",
    "Implement Docker security",
    "Use Docker in CI/CD"
  ],
  sections: [
    {
      title: "Learning Objectives",
      icon: "&#127919;",
      tag: "Goals",
      content: `<ul>
<li>Define and run multi-container applications with Docker Compose</li>
<li>Manage service dependencies and networking</li>
<li>Optimize Docker images for production</li>
<li>Implement Docker security best practices</li>
<li>Understand Docker registries and image management</li>
</ul>`
    },
    {
      title: "Theory — Docker Compose",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>What is Docker Compose?</h4>
<p>Docker Compose is a tool for defining and running multi-container Docker applications using a YAML file.</p>

<h4>docker-compose.yml Structure</h4>
<pre><code>version: '3.8'

services:
  web:
    build: ./web
    ports:
      - "80:80"
    depends_on:
      - api
    environment:
      - API_URL=http://api:3000
    networks:
      - app-net

  api:
    build: ./api
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/myapp
    volumes:
      - ./api:/app
    networks:
      - app-net

  db:
    image: postgres:15
    volumes:
      - db-data:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: myapp
    networks:
      - app-net

volumes:
  db-data:

networks:
  app-net:
    driver: bridge</code></pre>

<h4>Compose Commands</h4>
<pre><code># Start all services
docker compose up
docker compose up -d              # detached

# Stop all services
docker compose down
docker compose down -v            # also remove volumes

# Build/Rebuild
docker compose build
docker compose up --build         # rebuild and start

# Scale services
docker compose up -d --scale api=3

# View logs
docker compose logs
docker compose logs -f api        # follow specific service

# Execute command in service
docker compose exec api bash

# List services
docker compose ps</code></pre>

<h4>Full Stack Example: Web + API + DB + Redis</h4>
<pre><code>version: '3.8'

services:
  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=postgres
      - REDIS_HOST=redis
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: app
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    volumes:
      - redisdata:/data

volumes:
  pgdata:
  redisdata:</code></pre>`
    },
    {
      title: "Theory — Docker Security & Optimization",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Security Best Practices</h4>
<pre><code># 1. Run as non-root user
FROM node:18-alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# 2. Use specific image tags (not :latest)
FROM node:18.19-alpine3.19   # pinned version

# 3. Scan images for vulnerabilities
docker scout cves myimage:v1

# 4. Use read-only filesystem
docker run --read-only --tmpfs /tmp myapp

# 5. Limit resources
docker run --memory=512m --cpus=1 myapp

# 6. Don't store secrets in images
# Use environment variables or Docker secrets instead</code></pre>

<h4>Image Optimization</h4>
<pre><code># Bad: 1.1GB image
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "app.js"]

# Good: 150MB image
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .
USER node
CMD ["node", "app.js"]

# Check image sizes
docker images
docker history myapp:v1    # see layer sizes</code></pre>

<h4>Docker Registries</h4>
<pre><code># Docker Hub
docker login
docker tag myapp:v1 username/myapp:v1
docker push username/myapp:v1
docker pull username/myapp:v1

# Run a private registry
docker run -d -p 5000:5000 registry:2
docker tag myapp:v1 localhost:5000/myapp:v1
docker push localhost:5000/myapp:v1</code></pre>`
    },
    {
      title: "Hands-On Tasks",
      icon: "&#128295;",
      tag: "Practice",
      content: `<h4>Task: Build a Full-Stack App with Docker Compose</h4>
<p>Create a simple todo app with a Node.js API and PostgreSQL database.</p>

<pre><code># Create project structure
mkdir -p ~/devops-lab/compose-app && cd ~/devops-lab/compose-app

# Create API (server.js)
cat > server.js << 'ENDOFFILE'
const http = require('http');
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'secret',
  database: 'todos',
});

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  try {
    const result = await pool.query('SELECT NOW() as time');
    res.end(JSON.stringify({ status: 'ok', db_time: result.rows[0].time }));
  } catch (err) {
    res.end(JSON.stringify({ status: 'error', message: err.message }));
  }
});

server.listen(3000, () => console.log('API on :3000'));
ENDOFFILE

cat > package.json << 'ENDOFFILE'
{"name":"compose-app","dependencies":{"pg":"8.11.3"}}
ENDOFFILE

cat > Dockerfile << 'ENDOFFILE'
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
ENDOFFILE

cat > docker-compose.yml << 'ENDOFFILE'
version: '3.8'
services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=db
    depends_on:
      db:
        condition: service_healthy
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: todos
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready"]
      interval: 5s
      timeout: 5s
      retries: 5
volumes:
  pgdata:
ENDOFFILE

docker compose up --build -d
curl http://localhost:3000</code></pre>`
    },
    {
      title: "Interview Preparation",
      icon: "&#127908;",
      tag: "Interview",
      content: `<div class="qa-block">
<p class="qa-q">Q: What is Docker Compose and when would you use it?</p>
<p class="qa-a">A: Docker Compose is a tool for defining and running multi-container applications using a YAML configuration file. It's ideal for local development environments, testing, and simple production deployments where you need multiple services (app, database, cache) to work together.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How do you reduce Docker image size?</p>
<p class="qa-a">A: Use Alpine base images, multi-stage builds, minimize layers by combining RUN commands, use .dockerignore, remove unnecessary files and caches in the same layer, and only install production dependencies.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How do Docker containers communicate with each other?</p>
<p class="qa-a">A: Containers on the same Docker network can communicate by container name (DNS resolution). Docker Compose automatically creates a shared network for all services defined in the compose file.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What are Docker health checks?</p>
<p class="qa-a">A: Health checks are commands Docker runs periodically to verify a container is functioning correctly. Defined in Dockerfile or docker-compose.yml. Docker marks containers as healthy, unhealthy, or starting based on the check result.</p>
</div>`
    },
    {
      title: "Time Split (10 Hours)",
      icon: "&#9200;",
      tag: "Schedule",
      content: `<div class="time-split-grid">
<div class="time-split-item"><span class="ts-hours">3h</span><span class="ts-label">Theory & Reading</span></div>
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Hands-On Practice</span></div>
<div class="time-split-item"><span class="ts-hours">2h</span><span class="ts-label">Project Work</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Interview Prep</span></div>
</div>`
    }
  ]
},

// ===================== WEEK 8 =====================
{
  week: 8,
  title: "CI/CD Pipelines",
  subtitle: "Automate building, testing, and deploying your applications",
  difficulty: "intermediate",
  tools: ["GitHub Actions", "Jenkins", "YAML"],
  timeSplit: { theory: 3, handson: 4, interview: 1, project: 2 },
  checkpoints: [
    "Understand CI/CD concepts",
    "Write GitHub Actions workflows",
    "Build automated test pipelines",
    "Implement deployment automation",
    "Understand Jenkins basics"
  ],
  sections: [
    {
      title: "Learning Objectives",
      icon: "&#127919;",
      tag: "Goals",
      content: `<ul>
<li>Define Continuous Integration, Delivery, and Deployment</li>
<li>Write GitHub Actions workflows from scratch</li>
<li>Implement automated testing and linting</li>
<li>Create deployment pipelines</li>
<li>Understand Jenkins pipeline basics</li>
</ul>`
    },
    {
      title: "Theory — CI/CD Concepts",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Definitions</h4>
<ul>
<li><strong>Continuous Integration (CI):</strong> Developers merge code frequently. Each merge triggers automated builds and tests to catch issues early.</li>
<li><strong>Continuous Delivery (CD):</strong> Code is always in a deployable state. Deployment to production requires manual approval.</li>
<li><strong>Continuous Deployment:</strong> Every change that passes all tests is automatically deployed to production. No manual step.</li>
</ul>

<h4>CI/CD Pipeline Stages</h4>
<pre><code>Code Push → Build → Test → Security Scan → Deploy to Staging → Deploy to Production
    │         │       │          │                │                    │
    │         │       │          │                │                    └─ Automated or manual
    │         │       │          │                └─ Integration tests
    │         │       │          └─ SAST/DAST scanning
    │         │       └─ Unit tests, linting
    │         └─ Compile, Docker build
    └─ Trigger (push, PR, tag)</code></pre>

<h4>Benefits of CI/CD</h4>
<ul>
<li>Catch bugs early (fail fast)</li>
<li>Faster release cycles</li>
<li>Consistent, repeatable deployments</li>
<li>Reduced manual errors</li>
<li>Higher developer confidence</li>
</ul>

<h4>Popular CI/CD Tools</h4>
<table>
<tr><th>Tool</th><th>Type</th><th>Best For</th></tr>
<tr><td>GitHub Actions</td><td>Cloud-native</td><td>GitHub repos, simplicity</td></tr>
<tr><td>Jenkins</td><td>Self-hosted</td><td>Complex pipelines, enterprise</td></tr>
<tr><td>GitLab CI</td><td>Integrated</td><td>GitLab users</td></tr>
<tr><td>CircleCI</td><td>Cloud</td><td>Speed, Docker workflows</td></tr>
<tr><td>ArgoCD</td><td>GitOps</td><td>Kubernetes deployments</td></tr>
</table>`
    },
    {
      title: "Theory — GitHub Actions",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>GitHub Actions Concepts</h4>
<ul>
<li><strong>Workflow:</strong> An automated process defined in YAML. Lives in <code>.github/workflows/</code></li>
<li><strong>Event:</strong> A trigger (push, pull_request, schedule, manual)</li>
<li><strong>Job:</strong> A set of steps that run on the same runner</li>
<li><strong>Step:</strong> An individual task (run a command or use an action)</li>
<li><strong>Action:</strong> A reusable unit (e.g., checkout code, setup Node.js)</li>
<li><strong>Runner:</strong> A server that runs your workflows</li>
</ul>

<h4>Basic Workflow</h4>
<pre><code># .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build</code></pre>

<h4>Advanced Workflow Features</h4>
<pre><code>name: Advanced CI/CD

on:
  push:
    branches: [main]
  pull_request:

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: \${{ github.repository }}

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16, 18, 20]    # Test multiple versions
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
      - run: npm ci
      - run: npm test

  build-and-push:
    needs: test                         # Depends on test job
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' # Only on main branch
    steps:
      - uses: actions/checkout@v4

      - name: Login to GitHub Container Registry
        uses: docker/login-action@v3
        with:
          registry: \${{ env.REGISTRY }}
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}

      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:latest

  deploy:
    needs: build-and-push
    runs-on: ubuntu-latest
    environment: production             # Requires approval
    steps:
      - name: Deploy to server
        run: |
          echo "Deploying to production..."
          # SSH, kubectl, or cloud deploy commands here</code></pre>

<h4>Secrets and Variables</h4>
<pre><code># Set secrets in: Repo → Settings → Secrets and variables → Actions

# Use in workflow:
env:
  API_KEY: \${{ secrets.API_KEY }}

steps:
  - run: echo "Deploying to \${{ vars.DEPLOY_ENV }}"</code></pre>`
    },
    {
      title: "Theory — Jenkins Basics",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Jenkins Pipeline (Jenkinsfile)</h4>
<pre><code>pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker build -t myapp:$BUILD_NUMBER .'
            }
        }
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh 'docker push myapp:$BUILD_NUMBER'
                sh './deploy.sh'
            }
        }
    }
    post {
        success { echo 'Pipeline succeeded!' }
        failure { echo 'Pipeline failed!' }
    }
}</code></pre>

<h4>Running Jenkins in Docker</h4>
<pre><code>docker run -d -p 8080:8080 -p 50000:50000 \\
  -v jenkins_home:/var/jenkins_home \\
  --name jenkins jenkins/jenkins:lts

# Get initial admin password
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword</code></pre>`
    },
    {
      title: "Hands-On Tasks",
      icon: "&#128295;",
      tag: "Practice",
      content: `<h4>Task: Create a Complete CI/CD Pipeline</h4>
<pre><code># 1. Create a GitHub repo with a simple app
mkdir ci-demo && cd ci-demo
git init

# Create app
cat > app.js << 'EOF'
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
module.exports = { add, subtract };
EOF

cat > app.test.js << 'EOF'
const { add, subtract } = require('./app');
console.assert(add(2, 3) === 5, 'add failed');
console.assert(subtract(5, 3) === 2, 'subtract failed');
console.log('All tests passed!');
EOF

cat > package.json << 'EOF'
{
  "name": "ci-demo",
  "scripts": { "test": "node app.test.js" }
}
EOF

# 2. Create GitHub Actions workflow
mkdir -p .github/workflows
cat > .github/workflows/ci.yml << 'EOF'
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm test
EOF

# 3. Push to GitHub
git add .
git commit -m "Initial commit with CI"
# git remote add origin https://github.com/YOUR_USER/ci-demo.git
# git push -u origin main

# 4. Check Actions tab on GitHub to see pipeline run</code></pre>`
    },
    {
      title: "Interview Preparation",
      icon: "&#127908;",
      tag: "Interview",
      content: `<div class="qa-block">
<p class="qa-q">Q: What is the difference between Continuous Delivery and Continuous Deployment?</p>
<p class="qa-a">A: Continuous Delivery means code is always in a deployable state, but deployment to production requires manual approval. Continuous Deployment takes it further — every change that passes all tests is automatically deployed to production with no human intervention.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How would you design a CI/CD pipeline for a microservices application?</p>
<p class="qa-a">A: Each microservice gets its own pipeline. On PR: lint, unit test, build. On merge to main: build Docker image, push to registry, deploy to staging, run integration tests, deploy to production (canary or blue-green). Use a mono-repo or separate repos depending on team size.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What are GitHub Actions secrets and why are they important?</p>
<p class="qa-a">A: Secrets are encrypted environment variables stored in GitHub that can be used in workflows. They protect sensitive data like API keys, cloud credentials, and tokens. Secrets are never exposed in logs and can be scoped to a repo or organization.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How do you handle failed deployments in a CI/CD pipeline?</p>
<p class="qa-a">A: Implement automated rollback strategies: keep the previous version's artifacts/image available, use health checks after deployment, automatically roll back if health checks fail. Also: blue-green deployments, canary releases, and feature flags minimize blast radius.</p>
</div>`
    },
    {
      title: "Time Split (10 Hours)",
      icon: "&#9200;",
      tag: "Schedule",
      content: `<div class="time-split-grid">
<div class="time-split-item"><span class="ts-hours">3h</span><span class="ts-label">Theory & Reading</span></div>
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Hands-On Practice</span></div>
<div class="time-split-item"><span class="ts-hours">2h</span><span class="ts-label">Project Work</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Interview Prep</span></div>
</div>`
    }
  ]
},

// ===================== WEEK 9 =====================
{
  week: 9,
  title: "Cloud Computing & AWS Fundamentals",
  subtitle: "Understand cloud infrastructure and core AWS services",
  difficulty: "intermediate",
  tools: ["AWS Console", "AWS CLI", "EC2", "S3", "VPC", "IAM"],
  timeSplit: { theory: 4, handson: 3, interview: 2, project: 1 },
  checkpoints: [
    "Understand cloud computing models",
    "Navigate AWS Console",
    "Launch EC2 instances",
    "Use S3 for storage",
    "Configure VPC and IAM"
  ],
  sections: [
    {
      title: "Learning Objectives",
      icon: "&#127919;",
      tag: "Goals",
      content: `<ul>
<li>Understand IaaS, PaaS, SaaS cloud models</li>
<li>Navigate the AWS Management Console</li>
<li>Launch and manage EC2 instances</li>
<li>Use S3 for object storage</li>
<li>Design basic VPC networking</li>
<li>Configure IAM users, roles, and policies</li>
</ul>`
    },
    {
      title: "Theory — Cloud Computing",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Cloud Service Models</h4>
<table>
<tr><th>Model</th><th>You Manage</th><th>Provider Manages</th><th>Examples</th></tr>
<tr><td><strong>IaaS</strong></td><td>OS, Apps, Data</td><td>Hardware, Networking</td><td>AWS EC2, Azure VMs</td></tr>
<tr><td><strong>PaaS</strong></td><td>Apps, Data</td><td>OS, Runtime, Hardware</td><td>Heroku, AWS Elastic Beanstalk</td></tr>
<tr><td><strong>SaaS</strong></td><td>Just use it</td><td>Everything</td><td>Gmail, Slack, Salesforce</td></tr>
</table>

<h4>AWS Global Infrastructure</h4>
<ul>
<li><strong>Region:</strong> A geographical area (us-east-1, eu-west-1). Choose based on latency, compliance, and cost.</li>
<li><strong>Availability Zone (AZ):</strong> Isolated data centers within a region (us-east-1a, us-east-1b). Deploy across AZs for high availability.</li>
<li><strong>Edge Location:</strong> CDN endpoints for low-latency content delivery (CloudFront).</li>
</ul>

<h4>Core AWS Services Overview</h4>
<table>
<tr><th>Category</th><th>Service</th><th>Purpose</th></tr>
<tr><td>Compute</td><td>EC2</td><td>Virtual servers</td></tr>
<tr><td>Storage</td><td>S3</td><td>Object storage</td></tr>
<tr><td>Database</td><td>RDS</td><td>Managed databases</td></tr>
<tr><td>Networking</td><td>VPC</td><td>Virtual private network</td></tr>
<tr><td>Identity</td><td>IAM</td><td>Access management</td></tr>
<tr><td>Containers</td><td>ECS/EKS</td><td>Container orchestration</td></tr>
<tr><td>Serverless</td><td>Lambda</td><td>Run code without servers</td></tr>
<tr><td>CDN</td><td>CloudFront</td><td>Content delivery</td></tr>
<tr><td>DNS</td><td>Route 53</td><td>Domain management</td></tr>
<tr><td>Monitoring</td><td>CloudWatch</td><td>Metrics and logs</td></tr>
</table>`
    },
    {
      title: "Theory — EC2, S3, VPC, IAM",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>EC2 (Elastic Compute Cloud)</h4>
<p>EC2 provides virtual servers (instances) in the cloud.</p>
<pre><code># AWS CLI — Launch an instance
aws ec2 run-instances \\
  --image-id ami-0abcdef1234567890 \\
  --instance-type t2.micro \\
  --key-name my-keypair \\
  --security-group-ids sg-12345 \\
  --subnet-id subnet-12345

# Instance types
# t2.micro  — 1 vCPU, 1 GB RAM (free tier)
# t3.medium — 2 vCPU, 4 GB RAM
# m5.large  — 2 vCPU, 8 GB RAM
# c5.xlarge — 4 vCPU, 8 GB RAM (compute optimized)

# SSH into instance
ssh -i my-keypair.pem ec2-user@public-ip-address</code></pre>

<h4>S3 (Simple Storage Service)</h4>
<pre><code># Create a bucket
aws s3 mb s3://my-unique-bucket-name

# Upload files
aws s3 cp myfile.txt s3://my-bucket/
aws s3 cp ./dist s3://my-bucket/website/ --recursive

# Download
aws s3 cp s3://my-bucket/myfile.txt .

# Sync directories
aws s3 sync ./local-dir s3://my-bucket/remote-dir

# List contents
aws s3 ls s3://my-bucket/

# S3 storage classes:
# Standard        — Frequent access, low latency
# Standard-IA     — Infrequent access, lower cost
# Glacier         — Archive, minutes-hours retrieval
# Glacier Deep    — Long-term archive, 12-hour retrieval</code></pre>

<h4>VPC (Virtual Private Cloud)</h4>
<pre><code># VPC Architecture
┌─── VPC (10.0.0.0/16) ─────────────────────────┐
│  ┌── Public Subnet (10.0.1.0/24) ──┐           │
│  │  EC2 (web server)                │           │
│  │  ↕ Internet Gateway              │           │
│  └──────────────────────────────────┘           │
│  ┌── Private Subnet (10.0.2.0/24) ──┐          │
│  │  EC2 (app server)                 │          │
│  │  RDS (database)                   │          │
│  │  → NAT Gateway (for outbound)     │          │
│  └───────────────────────────────────┘          │
└─────────────────────────────────────────────────┘

# Key concepts:
# Subnet — segment of VPC IP range
# Internet Gateway — connects VPC to internet
# NAT Gateway — allows private instances outbound access
# Route Table — controls traffic routing
# Security Group — instance-level firewall (stateful)
# NACL — subnet-level firewall (stateless)</code></pre>

<h4>IAM (Identity and Access Management)</h4>
<pre><code># IAM concepts:
# User    — A person or application
# Group   — Collection of users
# Role    — Assumed by services (EC2, Lambda)
# Policy  — JSON document defining permissions

# Example IAM Policy (S3 read-only)
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::my-bucket",
                "arn:aws:s3:::my-bucket/*"
            ]
        }
    ]
}

# Best Practices:
# - Enable MFA for root account
# - Use IAM roles instead of access keys
# - Follow principle of least privilege
# - Never commit access keys to code</code></pre>`
    },
    {
      title: "Hands-On Tasks",
      icon: "&#128295;",
      tag: "Practice",
      content: `<h4>Task 1: Set Up AWS CLI</h4>
<pre><code># Install AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Configure credentials
aws configure
# Enter: Access Key, Secret Key, Region (us-east-1), Output (json)

# Verify
aws sts get-caller-identity</code></pre>

<h4>Task 2: S3 Static Website Hosting</h4>
<pre><code># Create bucket and upload a website
aws s3 mb s3://my-devops-website-$(date +%s)
echo "<h1>Hello from S3!</h1>" > index.html
aws s3 cp index.html s3://my-bucket/ --acl public-read

# Enable static website hosting via AWS Console:
# S3 → Bucket → Properties → Static website hosting → Enable</code></pre>

<h4>Task 3: Practice IAM Policies</h4>
<p>Using the AWS Console, create:</p>
<ol>
<li>A new IAM user with programmatic access</li>
<li>A group called "Developers" with S3 and EC2 read-only access</li>
<li>Add the user to the group</li>
<li>Test access by trying to create vs list resources</li>
</ol>

<div class="callout callout-warn">
<strong>Cost Warning:</strong> Always use the free tier where possible. Set up billing alerts in AWS to avoid unexpected charges. Remember to terminate resources when done practicing.
</div>`
    },
    {
      title: "Interview Preparation",
      icon: "&#127908;",
      tag: "Interview",
      content: `<div class="qa-block">
<p class="qa-q">Q: What is the difference between a Security Group and a NACL?</p>
<p class="qa-a">A: Security Groups are stateful (return traffic automatically allowed), operate at the instance level, and only support allow rules. NACLs are stateless (must explicitly allow return traffic), operate at the subnet level, and support both allow and deny rules.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is the difference between public and private subnets?</p>
<p class="qa-a">A: A public subnet has a route to an Internet Gateway, allowing instances with public IPs to communicate directly with the internet. A private subnet has no direct internet route — instances use a NAT Gateway for outbound internet access only.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How would you design a highly available architecture on AWS?</p>
<p class="qa-a">A: Deploy across multiple AZs, use an Application Load Balancer to distribute traffic, Auto Scaling Groups to handle variable load, RDS Multi-AZ for database failover, S3 for durable storage, and Route 53 for DNS failover.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is an IAM role and when would you use one?</p>
<p class="qa-a">A: An IAM role is an identity with specific permissions that can be assumed by AWS services or users temporarily. Use roles for EC2 instances to access S3, Lambda to access DynamoDB, or cross-account access — never embed access keys in code.</p>
</div>`
    },
    {
      title: "Time Split (10 Hours)",
      icon: "&#9200;",
      tag: "Schedule",
      content: `<div class="time-split-grid">
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Theory & Reading</span></div>
<div class="time-split-item"><span class="ts-hours">3h</span><span class="ts-label">Hands-On Practice</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Project Work</span></div>
<div class="time-split-item"><span class="ts-hours">2h</span><span class="ts-label">Interview Prep</span></div>
</div>`
    }
  ]
},

// ===================== WEEK 10 =====================
{
  week: 10,
  title: "Infrastructure as Code — Terraform",
  subtitle: "Define and manage infrastructure using code",
  difficulty: "intermediate",
  tools: ["Terraform", "HCL", "AWS Provider"],
  timeSplit: { theory: 3, handson: 4, interview: 1, project: 2 },
  checkpoints: [
    "Understand IaC concepts",
    "Write Terraform configurations",
    "Manage state and workspaces",
    "Use modules and variables",
    "Plan, apply, and destroy infrastructure"
  ],
  sections: [
    {
      title: "Learning Objectives",
      icon: "&#127919;",
      tag: "Goals",
      content: `<ul>
<li>Understand Infrastructure as Code principles</li>
<li>Write Terraform HCL configurations</li>
<li>Use terraform init, plan, apply, destroy workflow</li>
<li>Manage state files and remote backends</li>
<li>Create reusable modules</li>
<li>Use variables, outputs, and data sources</li>
</ul>`
    },
    {
      title: "Theory — Infrastructure as Code",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>What is IaC?</h4>
<p>Infrastructure as Code (IaC) means managing and provisioning infrastructure through code instead of manual processes.</p>

<h4>Benefits of IaC</h4>
<ul>
<li><strong>Version Control:</strong> Track infrastructure changes in Git</li>
<li><strong>Reproducibility:</strong> Same code = same infrastructure every time</li>
<li><strong>Automation:</strong> No manual clicking in consoles</li>
<li><strong>Documentation:</strong> The code IS the documentation</li>
<li><strong>Review:</strong> Infrastructure changes go through code review</li>
</ul>

<h4>Terraform Overview</h4>
<p>Terraform by HashiCorp is the most popular IaC tool. It uses HCL (HashiCorp Configuration Language) and supports multiple cloud providers.</p>

<h4>Terraform Workflow</h4>
<pre><code>Write (.tf files) → Init (download providers) → Plan (preview) → Apply (create) → Destroy (cleanup)

terraform init     # Initialize, download providers
terraform plan     # Preview what will change
terraform apply    # Create/update infrastructure
terraform destroy  # Remove all resources</code></pre>

<h4>Installing Terraform</h4>
<pre><code># Linux/WSL
wget https://releases.hashicorp.com/terraform/1.7.0/terraform_1.7.0_linux_amd64.zip
unzip terraform_1.7.0_linux_amd64.zip
sudo mv terraform /usr/local/bin/
terraform --version</code></pre>`
    },
    {
      title: "Theory — Terraform Configuration",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Basic Structure</h4>
<pre><code># main.tf — Define resources
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  required_version = ">= 1.0"
}

provider "aws" {
  region = var.aws_region
}

# Create a VPC
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true

  tags = {
    Name        = "main-vpc"
    Environment = var.environment
  }
}

# Create a subnet
resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
  availability_zone       = "\${var.aws_region}a"

  tags = {
    Name = "public-subnet"
  }
}

# Create an EC2 instance
resource "aws_instance" "web" {
  ami           = "ami-0abcdef1234567890"
  instance_type = var.instance_type
  subnet_id     = aws_subnet.public.id

  tags = {
    Name = "web-server"
  }
}</code></pre>

<h4>Variables</h4>
<pre><code># variables.tf
variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "dev"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}

# terraform.tfvars (values file)
aws_region    = "us-east-1"
environment   = "production"
instance_type = "t3.medium"</code></pre>

<h4>Outputs</h4>
<pre><code># outputs.tf
output "vpc_id" {
  description = "VPC ID"
  value       = aws_vpc.main.id
}

output "instance_public_ip" {
  description = "Public IP of web server"
  value       = aws_instance.web.public_ip
}</code></pre>

<h4>State Management</h4>
<pre><code># Remote backend (S3)
terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}

# State commands
terraform state list              # list resources
terraform state show aws_instance.web  # show resource details
terraform state rm aws_instance.web    # remove from state</code></pre>

<h4>Modules</h4>
<pre><code># modules/vpc/main.tf
variable "cidr" { type = string }
variable "name" { type = string }

resource "aws_vpc" "this" {
  cidr_block = var.cidr
  tags = { Name = var.name }
}

output "vpc_id" { value = aws_vpc.this.id }

# Using the module in main.tf
module "vpc" {
  source = "./modules/vpc"
  cidr   = "10.0.0.0/16"
  name   = "production-vpc"
}

resource "aws_subnet" "public" {
  vpc_id     = module.vpc.vpc_id
  cidr_block = "10.0.1.0/24"
}</code></pre>`
    },
    {
      title: "Hands-On Tasks",
      icon: "&#128295;",
      tag: "Practice",
      content: `<h4>Task: Create a Complete AWS Infrastructure</h4>
<pre><code># Create project directory
mkdir -p ~/devops-lab/terraform-demo && cd ~/devops-lab/terraform-demo

# Create main.tf
cat > main.tf << 'EOF'
terraform {
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 5.0" }
  }
}

provider "aws" { region = var.region }

resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  tags = { Name = "\${var.project}-vpc" }
}

resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
  tags = { Name = "\${var.project}-public" }
}

resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.main.id
  tags   = { Name = "\${var.project}-igw" }
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }
}

resource "aws_route_table_association" "public" {
  subnet_id      = aws_subnet.public.id
  route_table_id = aws_route_table.public.id
}

resource "aws_security_group" "web" {
  vpc_id = aws_vpc.main.id
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = { Name = "\${var.project}-sg" }
}
EOF

cat > variables.tf << 'EOF'
variable "region"  { default = "us-east-1" }
variable "project" { default = "devops-demo" }
EOF

cat > outputs.tf << 'EOF'
output "vpc_id" { value = aws_vpc.main.id }
output "subnet_id" { value = aws_subnet.public.id }
EOF

# Run terraform
terraform init
terraform plan
terraform apply -auto-approve

# Clean up
terraform destroy -auto-approve</code></pre>`
    },
    {
      title: "Interview Preparation",
      icon: "&#127908;",
      tag: "Interview",
      content: `<div class="qa-block">
<p class="qa-q">Q: What is Terraform state and why is it important?</p>
<p class="qa-a">A: Terraform state is a JSON file that maps your configuration to real-world resources. It tracks resource IDs, attributes, and dependencies. Without state, Terraform can't know what exists or what needs changing. Store state remotely (S3+DynamoDB) for team collaboration and locking.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is the difference between Terraform and Ansible?</p>
<p class="qa-a">A: Terraform is declarative and focused on provisioning infrastructure (creating VMs, networks, databases). Ansible is procedural and focused on configuration management (installing software, configuring servers). Terraform manages the "what" infrastructure exists; Ansible manages "how" it's configured.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is <code>terraform plan</code> and why should you always run it?</p>
<p class="qa-a">A: <code>terraform plan</code> shows a preview of changes without applying them. It shows what will be created, modified, or destroyed. Always run plan before apply to catch unexpected changes, verify your intent, and prevent accidental destruction of resources.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How do you manage different environments (dev/staging/prod) with Terraform?</p>
<p class="qa-a">A: Use workspaces, separate .tfvars files per environment, separate state files, or directory-based separation (envs/dev, envs/prod). Modules ensure consistent infrastructure across environments while variables handle environment-specific differences.</p>
</div>`
    },
    {
      title: "Time Split (10 Hours)",
      icon: "&#9200;",
      tag: "Schedule",
      content: `<div class="time-split-grid">
<div class="time-split-item"><span class="ts-hours">3h</span><span class="ts-label">Theory & Reading</span></div>
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Hands-On Practice</span></div>
<div class="time-split-item"><span class="ts-hours">2h</span><span class="ts-label">Project Work</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Interview Prep</span></div>
</div>`
    }
  ]
},

// ===================== WEEK 11 =====================
{
  week: 11,
  title: "Kubernetes Fundamentals",
  subtitle: "Orchestrate containers at scale with Kubernetes",
  difficulty: "advanced",
  tools: ["kubectl", "minikube", "Kubernetes"],
  timeSplit: { theory: 4, handson: 4, interview: 1, project: 1 },
  checkpoints: [
    "Understand K8s architecture",
    "Deploy applications with kubectl",
    "Work with Pods, Deployments, Services",
    "Use ConfigMaps and Secrets",
    "Understand namespaces and RBAC"
  ],
  sections: [
    {
      title: "Learning Objectives",
      icon: "&#127919;",
      tag: "Goals",
      content: `<ul>
<li>Understand why Kubernetes exists and when to use it</li>
<li>Set up a local Kubernetes cluster</li>
<li>Deploy applications using Pods, Deployments, and Services</li>
<li>Manage configuration with ConfigMaps and Secrets</li>
<li>Understand Kubernetes networking and service discovery</li>
</ul>`
    },
    {
      title: "Theory — Kubernetes Architecture",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>What is Kubernetes?</h4>
<p>Kubernetes (K8s) is an open-source container orchestration platform. It automates deploying, scaling, and managing containerized applications.</p>

<h4>Why Kubernetes?</h4>
<ul>
<li>Docker runs containers on a single machine. K8s runs them across a cluster.</li>
<li>Automatic scaling, load balancing, self-healing</li>
<li>Rolling updates with zero downtime</li>
<li>Service discovery and networking</li>
<li>Secret and configuration management</li>
</ul>

<h4>Architecture</h4>
<pre><code>┌─── Control Plane ─────────────────────────────┐
│  API Server    — Frontend for K8s (REST API)   │
│  etcd          — Key-value store (cluster state)│
│  Scheduler     — Assigns pods to nodes          │
│  Controller    — Maintains desired state        │
│    Manager                                      │
└─────────────────────────────────────────────────┘

┌─── Worker Node ───────────────────────────────┐
│  kubelet       — Agent, runs pods              │
│  kube-proxy    — Networking, load balancing     │
│  Container     — Docker/containerd              │
│    Runtime                                      │
│  ┌──── Pod ────┐  ┌──── Pod ────┐              │
│  │ Container(s)│  │ Container(s)│              │
│  └─────────────┘  └─────────────┘              │
└─────────────────────────────────────────────────┘</code></pre>

<h4>Key Concepts</h4>
<table>
<tr><th>Concept</th><th>Description</th></tr>
<tr><td><strong>Pod</strong></td><td>Smallest deployable unit. One or more containers sharing network/storage.</td></tr>
<tr><td><strong>Deployment</strong></td><td>Manages ReplicaSets and Pods. Handles rolling updates.</td></tr>
<tr><td><strong>Service</strong></td><td>Stable network endpoint to access a set of Pods.</td></tr>
<tr><td><strong>Namespace</strong></td><td>Virtual cluster within a cluster for isolation.</td></tr>
<tr><td><strong>ConfigMap</strong></td><td>Store non-sensitive configuration data.</td></tr>
<tr><td><strong>Secret</strong></td><td>Store sensitive data (passwords, tokens).</td></tr>
<tr><td><strong>Ingress</strong></td><td>HTTP routing and load balancing.</td></tr>
<tr><td><strong>PersistentVolume</strong></td><td>Durable storage for stateful apps.</td></tr>
</table>

<h4>Setting Up (minikube)</h4>
<pre><code># Install minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Install kubectl
curl -LO "https://dl.k8s.io/release/$(curl -sL https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install kubectl /usr/local/bin/kubectl

# Start cluster
minikube start

# Verify
kubectl cluster-info
kubectl get nodes</code></pre>`
    },
    {
      title: "Theory — Deployments, Services & Configuration",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Pod Definition</h4>
<pre><code># pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
    - name: nginx
      image: nginx:1.25
      ports:
        - containerPort: 80</code></pre>

<h4>Deployment</h4>
<pre><code># deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
        - name: web
          image: nginx:1.25
          ports:
            - containerPort: 80
          resources:
            requests:
              memory: "64Mi"
              cpu: "250m"
            limits:
              memory: "128Mi"
              cpu: "500m"</code></pre>

<h4>Service Types</h4>
<pre><code># service.yaml — ClusterIP (internal)
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  selector:
    app: web
  ports:
    - port: 80
      targetPort: 80
  type: ClusterIP    # Default: internal only

# NodePort — expose on each node's IP
  type: NodePort
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30080    # 30000-32767

# LoadBalancer — cloud load balancer
  type: LoadBalancer</code></pre>

<h4>ConfigMap and Secret</h4>
<pre><code># configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DATABASE_HOST: "postgres-service"
  LOG_LEVEL: "info"

# secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  DB_PASSWORD: cGFzc3dvcmQxMjM=    # base64 encoded

# Using in a Deployment
spec:
  containers:
    - name: app
      envFrom:
        - configMapRef:
            name: app-config
        - secretRef:
            name: app-secrets</code></pre>

<h4>kubectl Commands</h4>
<pre><code># Apply/Delete resources
kubectl apply -f deployment.yaml
kubectl delete -f deployment.yaml

# Get resources
kubectl get pods
kubectl get deployments
kubectl get services
kubectl get all

# Describe (detailed info)
kubectl describe pod nginx-pod

# Logs
kubectl logs pod-name
kubectl logs -f pod-name        # follow

# Execute into pod
kubectl exec -it pod-name -- bash

# Scale
kubectl scale deployment web-app --replicas=5

# Rolling update
kubectl set image deployment/web-app web=nginx:1.26

# Rollback
kubectl rollout undo deployment/web-app
kubectl rollout status deployment/web-app
kubectl rollout history deployment/web-app</code></pre>`
    },
    {
      title: "Hands-On Tasks",
      icon: "&#128295;",
      tag: "Practice",
      content: `<h4>Task: Deploy a Complete Application to Kubernetes</h4>
<pre><code># Start minikube
minikube start

# 1. Create a namespace
kubectl create namespace devops-lab

# 2. Deploy nginx
kubectl create deployment web --image=nginx:1.25 -n devops-lab
kubectl expose deployment web --port=80 --type=NodePort -n devops-lab

# 3. Scale it
kubectl scale deployment web --replicas=3 -n devops-lab
kubectl get pods -n devops-lab

# 4. Access the service
minikube service web -n devops-lab --url

# 5. Rolling update
kubectl set image deployment/web web=nginx:1.26 -n devops-lab
kubectl rollout status deployment/web -n devops-lab

# 6. Rollback
kubectl rollout undo deployment/web -n devops-lab

# 7. Clean up
kubectl delete namespace devops-lab</code></pre>`
    },
    {
      title: "Interview Preparation",
      icon: "&#127908;",
      tag: "Interview",
      content: `<div class="qa-block">
<p class="qa-q">Q: What is the difference between a Pod and a Deployment?</p>
<p class="qa-a">A: A Pod is the smallest deployable unit (one or more containers). A Deployment manages a set of identical Pods via a ReplicaSet, handling scaling, rolling updates, and rollbacks. You almost never create Pods directly — use Deployments instead.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: Explain Kubernetes service types.</p>
<p class="qa-a">A: ClusterIP (default) — internal-only access. NodePort — exposes on each node's IP at a static port. LoadBalancer — provisions a cloud load balancer. ExternalName — maps to a DNS name. Use ClusterIP for internal services, LoadBalancer for public-facing ones.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How does Kubernetes handle self-healing?</p>
<p class="qa-a">A: The controller manager continuously compares desired state (defined in manifests) with actual state. If a Pod crashes, the ReplicaSet creates a new one. If a node fails, Pods are rescheduled to healthy nodes. Liveness probes restart unhealthy containers.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is the difference between ConfigMaps and Secrets?</p>
<p class="qa-a">A: Both store configuration data for Pods. ConfigMaps are for non-sensitive data (feature flags, URLs). Secrets are for sensitive data (passwords, API keys) — they're base64 encoded and can be encrypted at rest in etcd. Secrets are mounted with restricted permissions.</p>
</div>`
    },
    {
      title: "Time Split (10 Hours)",
      icon: "&#9200;",
      tag: "Schedule",
      content: `<div class="time-split-grid">
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Theory & Reading</span></div>
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Hands-On Practice</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Project Work</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Interview Prep</span></div>
</div>`
    }
  ]
},

// ===================== WEEK 12 =====================
{
  week: 12,
  title: "Advanced Kubernetes & Helm",
  subtitle: "Production-grade Kubernetes with Helm charts, Ingress, and autoscaling",
  difficulty: "advanced",
  tools: ["Helm", "kubectl", "Ingress Controller", "HPA"],
  timeSplit: { theory: 3, handson: 4, interview: 1, project: 2 },
  checkpoints: [
    "Use Helm for package management",
    "Configure Ingress controllers",
    "Implement autoscaling (HPA)",
    "Use persistent storage",
    "Implement health checks and probes"
  ],
  sections: [
    {
      title: "Learning Objectives",
      icon: "&#127919;",
      tag: "Goals",
      content: `<ul>
<li>Use Helm to manage Kubernetes applications</li>
<li>Configure Ingress for HTTP routing</li>
<li>Implement Horizontal Pod Autoscaling</li>
<li>Use PersistentVolumes for stateful apps</li>
<li>Configure liveness and readiness probes</li>
</ul>`
    },
    {
      title: "Theory — Helm",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>What is Helm?</h4>
<p>Helm is the package manager for Kubernetes. It uses "charts" — pre-configured templates of Kubernetes resources.</p>

<pre><code># Install Helm
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# Add a chart repository
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

# Search charts
helm search repo nginx

# Install a chart
helm install my-nginx bitnami/nginx
helm install my-nginx bitnami/nginx --set service.type=NodePort

# List releases
helm list

# Upgrade
helm upgrade my-nginx bitnami/nginx --set replicaCount=3

# Rollback
helm rollback my-nginx 1

# Uninstall
helm uninstall my-nginx</code></pre>

<h4>Creating Your Own Chart</h4>
<pre><code># Create chart scaffold
helm create myapp

# Structure:
# myapp/
# ├── Chart.yaml        # Chart metadata
# ├── values.yaml       # Default config values
# ├── templates/
# │   ├── deployment.yaml
# │   ├── service.yaml
# │   ├── ingress.yaml
# │   └── _helpers.tpl
# └── charts/           # Dependencies

# Install your chart
helm install my-release ./myapp
helm install my-release ./myapp -f custom-values.yaml</code></pre>`
    },
    {
      title: "Theory — Ingress, Autoscaling & Probes",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Ingress</h4>
<pre><code># ingress.yaml — Route HTTP traffic
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
    - host: myapp.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: frontend-service
                port:
                  number: 80
          - path: /api
            pathType: Prefix
            backend:
              service:
                name: api-service
                port:
                  number: 3000</code></pre>

<h4>Horizontal Pod Autoscaler (HPA)</h4>
<pre><code># hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: web-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: web-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70

# CLI shorthand
kubectl autoscale deployment web-app --min=2 --max=10 --cpu-percent=70
kubectl get hpa</code></pre>

<h4>Liveness & Readiness Probes</h4>
<pre><code>spec:
  containers:
    - name: app
      image: myapp:v1
      # Readiness: Is the container ready to receive traffic?
      readinessProbe:
        httpGet:
          path: /health
          port: 3000
        initialDelaySeconds: 5
        periodSeconds: 10
      # Liveness: Is the container still alive?
      livenessProbe:
        httpGet:
          path: /health
          port: 3000
        initialDelaySeconds: 15
        periodSeconds: 20
      # Startup: Has the container started successfully?
      startupProbe:
        httpGet:
          path: /health
          port: 3000
        failureThreshold: 30
        periodSeconds: 10</code></pre>

<h4>PersistentVolumes</h4>
<pre><code># pvc.yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: db-storage
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi

# Use in Deployment
volumes:
  - name: db-data
    persistentVolumeClaim:
      claimName: db-storage
containers:
  - volumeMounts:
      - mountPath: /var/lib/postgresql/data
        name: db-data</code></pre>`
    },
    {
      title: "Hands-On Tasks",
      icon: "&#128295;",
      tag: "Practice",
      content: `<h4>Task: Deploy a Full App with Helm and Ingress</h4>
<pre><code># 1. Install ingress controller
minikube addons enable ingress

# 2. Install PostgreSQL with Helm
helm install my-db bitnami/postgresql \\
  --set auth.postgresPassword=secret \\
  --set primary.persistence.size=1Gi

# 3. Create your own Helm chart
helm create mywebapp
# Edit templates and values.yaml

# 4. Install with custom values
helm install my-release ./mywebapp

# 5. Set up autoscaling
kubectl autoscale deployment my-release-mywebapp --min=2 --max=5 --cpu-percent=70

# 6. Check everything
kubectl get all
kubectl get ingress
kubectl get hpa</code></pre>`
    },
    {
      title: "Interview Preparation",
      icon: "&#127908;",
      tag: "Interview",
      content: `<div class="qa-block">
<p class="qa-q">Q: What is Helm and why use it?</p>
<p class="qa-a">A: Helm is Kubernetes' package manager. It bundles K8s manifests into reusable "charts" with templating and versioning. Benefits: DRY configuration, easy upgrades/rollbacks, environment-specific values files, and a rich ecosystem of community charts for common software.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is the difference between liveness and readiness probes?</p>
<p class="qa-a">A: Readiness probes determine if a Pod should receive traffic (removed from Service endpoints if failing). Liveness probes determine if a container needs restarting (container killed and restarted if failing). A Pod can be alive but not ready (e.g., loading data).</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How does Horizontal Pod Autoscaling work?</p>
<p class="qa-a">A: HPA monitors metrics (CPU, memory, custom) via the metrics server. When the target metric exceeds the threshold, it increases replicas; when below, it decreases. It checks every 15 seconds by default and respects min/max replica bounds.</p>
</div>`
    },
    {
      title: "Time Split (10 Hours)",
      icon: "&#9200;",
      tag: "Schedule",
      content: `<div class="time-split-grid">
<div class="time-split-item"><span class="ts-hours">3h</span><span class="ts-label">Theory & Reading</span></div>
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Hands-On Practice</span></div>
<div class="time-split-item"><span class="ts-hours">2h</span><span class="ts-label">Project Work</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Interview Prep</span></div>
</div>`
    }
  ]
},

// ===================== WEEK 13 =====================
{
  week: 13,
  title: "Monitoring, Logging & Observability",
  subtitle: "See what's happening inside your systems",
  difficulty: "advanced",
  tools: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch"],
  timeSplit: { theory: 3, handson: 4, interview: 1, project: 2 },
  checkpoints: [
    "Understand the three pillars of observability",
    "Set up Prometheus and Grafana",
    "Implement centralized logging",
    "Create dashboards and alerts",
    "Monitor Kubernetes clusters"
  ],
  sections: [
    {
      title: "Learning Objectives",
      icon: "&#127919;",
      tag: "Goals",
      content: `<ul>
<li>Understand metrics, logs, and traces (three pillars)</li>
<li>Set up Prometheus for metrics collection</li>
<li>Create Grafana dashboards</li>
<li>Implement centralized logging (ELK/EFK)</li>
<li>Configure alerts and incident response</li>
</ul>`
    },
    {
      title: "Theory — Observability",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Three Pillars of Observability</h4>
<table>
<tr><th>Pillar</th><th>What</th><th>Tools</th></tr>
<tr><td><strong>Metrics</strong></td><td>Numeric measurements over time (CPU, memory, request rate)</td><td>Prometheus, CloudWatch, Datadog</td></tr>
<tr><td><strong>Logs</strong></td><td>Timestamped records of events</td><td>ELK Stack, Loki, CloudWatch Logs</td></tr>
<tr><td><strong>Traces</strong></td><td>Request flow across services</td><td>Jaeger, Zipkin, AWS X-Ray</td></tr>
</table>

<h4>Key Metrics (USE & RED Methods)</h4>
<p><strong>USE Method</strong> (for infrastructure):</p>
<ul>
<li><strong>Utilization:</strong> How busy is the resource?</li>
<li><strong>Saturation:</strong> How much extra work is queued?</li>
<li><strong>Errors:</strong> How many errors occurred?</li>
</ul>

<p><strong>RED Method</strong> (for services):</p>
<ul>
<li><strong>Rate:</strong> Requests per second</li>
<li><strong>Errors:</strong> Failed requests per second</li>
<li><strong>Duration:</strong> Response time distribution</li>
</ul>

<h4>The Four Golden Signals (Google SRE)</h4>
<ol>
<li><strong>Latency:</strong> Time to service a request</li>
<li><strong>Traffic:</strong> Demand on the system</li>
<li><strong>Errors:</strong> Rate of failed requests</li>
<li><strong>Saturation:</strong> How full the system is</li>
</ol>`
    },
    {
      title: "Theory — Prometheus & Grafana",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Prometheus</h4>
<p>Prometheus is an open-source monitoring system that collects metrics from targets by scraping HTTP endpoints.</p>

<pre><code># prometheus.yml — Configuration
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['localhost:9100']

  - job_name: 'app'
    static_configs:
      - targets: ['app:3000']

# PromQL — Query Language
# Total HTTP requests
http_requests_total

# Request rate (per second over 5 minutes)
rate(http_requests_total[5m])

# 95th percentile latency
histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))

# CPU usage percentage
100 - (avg by(instance)(rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)

# Memory usage
node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes</code></pre>

<h4>Running with Docker Compose</h4>
<pre><code>version: '3.8'
services:
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    environment:
      GF_SECURITY_ADMIN_PASSWORD: admin
    volumes:
      - grafana_data:/var/lib/grafana

  node-exporter:
    image: prom/node-exporter:latest
    ports:
      - "9100:9100"

volumes:
  prometheus_data:
  grafana_data:</code></pre>

<h4>Alerting</h4>
<pre><code># alert-rules.yml
groups:
  - name: example
    rules:
      - alert: HighCPUUsage
        expr: 100 - (avg by(instance)(rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High CPU usage on {{ $labels.instance }}"

      - alert: ServiceDown
        expr: up == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "{{ $labels.instance }} is down"</code></pre>`
    },
    {
      title: "Theory — Centralized Logging (ELK)",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>ELK Stack</h4>
<ul>
<li><strong>Elasticsearch:</strong> Search and analytics engine (stores logs)</li>
<li><strong>Logstash:</strong> Log processing pipeline (collect, parse, transform)</li>
<li><strong>Kibana:</strong> Visualization dashboard</li>
<li><strong>Filebeat:</strong> Lightweight log shipper (alternative to Logstash)</li>
</ul>

<pre><code># Log flow:
Application → Filebeat → Logstash → Elasticsearch → Kibana
                (ship)     (process)    (store)       (visualize)

# Structured logging (best practice)
# Instead of: "User john logged in from 192.168.1.1"
# Use JSON:
{
  "timestamp": "2024-01-15T10:30:00Z",
  "level": "info",
  "message": "User logged in",
  "user": "john",
  "ip": "192.168.1.1",
  "service": "auth-service"
}</code></pre>

<h4>Log Levels</h4>
<table>
<tr><th>Level</th><th>When to Use</th></tr>
<tr><td>DEBUG</td><td>Detailed diagnostic info (development only)</td></tr>
<tr><td>INFO</td><td>General operational events</td></tr>
<tr><td>WARN</td><td>Unexpected but non-critical events</td></tr>
<tr><td>ERROR</td><td>Error events that might still allow continued operation</td></tr>
<tr><td>FATAL</td><td>Severe errors causing application to abort</td></tr>
</table>`
    },
    {
      title: "Hands-On Tasks",
      icon: "&#128295;",
      tag: "Practice",
      content: `<h4>Task: Set Up a Monitoring Stack</h4>
<pre><code># Create monitoring directory
mkdir -p ~/devops-lab/monitoring && cd ~/devops-lab/monitoring

# Create prometheus.yml
cat > prometheus.yml << 'EOF'
global:
  scrape_interval: 15s
scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
  - job_name: 'node'
    static_configs:
      - targets: ['node-exporter:9100']
EOF

# Create docker-compose.yml (as shown above)
# Then run:
docker compose up -d

# Access:
# Prometheus: http://localhost:9090
# Grafana: http://localhost:3000 (admin/admin)
# Add Prometheus as data source in Grafana
# Import dashboard #1860 (Node Exporter) for system metrics</code></pre>`
    },
    {
      title: "Interview Preparation",
      icon: "&#127908;",
      tag: "Interview",
      content: `<div class="qa-block">
<p class="qa-q">Q: What are the three pillars of observability?</p>
<p class="qa-a">A: Metrics (numeric time-series data — CPU, request rate), Logs (timestamped event records), and Traces (request flow across distributed services). All three are needed for complete system understanding.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is PromQL?</p>
<p class="qa-a">A: PromQL is Prometheus's query language for selecting and aggregating time-series data. Example: <code>rate(http_requests_total{status="500"}[5m])</code> gives the per-second rate of 500 errors over the last 5 minutes.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How would you implement alerting for a production system?</p>
<p class="qa-a">A: Define alert rules in Prometheus based on SLOs (e.g., error rate > 1%, latency p99 > 500ms). Route alerts through Alertmanager to appropriate channels (PagerDuty for critical, Slack for warnings). Include runbooks with each alert for incident response.</p>
</div>`
    },
    {
      title: "Time Split (10 Hours)",
      icon: "&#9200;",
      tag: "Schedule",
      content: `<div class="time-split-grid">
<div class="time-split-item"><span class="ts-hours">3h</span><span class="ts-label">Theory & Reading</span></div>
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Hands-On Practice</span></div>
<div class="time-split-item"><span class="ts-hours">2h</span><span class="ts-label">Project Work</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Interview Prep</span></div>
</div>`
    }
  ]
},

// ===================== WEEK 14 =====================
{
  week: 14,
  title: "Security & DevSecOps",
  subtitle: "Shift security left — embed security into the DevOps lifecycle",
  difficulty: "advanced",
  tools: ["Trivy", "OWASP", "Vault", "SSL/TLS", "SAST/DAST"],
  timeSplit: { theory: 4, handson: 3, interview: 2, project: 1 },
  checkpoints: [
    "Understand DevSecOps principles",
    "Scan containers and code for vulnerabilities",
    "Implement secrets management",
    "Configure SSL/TLS",
    "Harden infrastructure"
  ],
  sections: [
    {
      title: "Learning Objectives",
      icon: "&#127919;",
      tag: "Goals",
      content: `<ul>
<li>Understand DevSecOps philosophy (shift-left security)</li>
<li>Implement container image scanning</li>
<li>Use secrets management tools</li>
<li>Configure SSL/TLS certificates</li>
<li>Apply OWASP security principles</li>
<li>Harden Docker and Kubernetes</li>
</ul>`
    },
    {
      title: "Theory — DevSecOps",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>What is DevSecOps?</h4>
<p>DevSecOps integrates security practices into every phase of the DevOps lifecycle instead of treating security as an afterthought.</p>

<h4>Security in the CI/CD Pipeline</h4>
<pre><code>Code → SAST → Build → Container Scan → Test → DAST → Deploy → Runtime Security
        │                   │                    │                    │
   Static Analysis    Image scanning      Dynamic testing    Runtime monitoring
   (Semgrep, SonarQube)  (Trivy, Snyk)    (OWASP ZAP)     (Falco, Aqua)</code></pre>

<h4>OWASP Top 10 (Web Security Risks)</h4>
<table>
<tr><th>#</th><th>Risk</th><th>Prevention</th></tr>
<tr><td>1</td><td>Broken Access Control</td><td>Enforce least privilege, deny by default</td></tr>
<tr><td>2</td><td>Cryptographic Failures</td><td>Use TLS, hash passwords, encrypt data at rest</td></tr>
<tr><td>3</td><td>Injection (SQL, XSS)</td><td>Parameterized queries, input validation</td></tr>
<tr><td>4</td><td>Insecure Design</td><td>Threat modeling, secure design patterns</td></tr>
<tr><td>5</td><td>Security Misconfiguration</td><td>Hardened defaults, automated config audits</td></tr>
<tr><td>6</td><td>Vulnerable Components</td><td>Dependency scanning, regular updates</td></tr>
<tr><td>7</td><td>Authentication Failures</td><td>MFA, strong password policies, rate limiting</td></tr>
<tr><td>8</td><td>Data Integrity Failures</td><td>Digital signatures, CI/CD pipeline security</td></tr>
<tr><td>9</td><td>Logging Failures</td><td>Log security events, monitor for breaches</td></tr>
<tr><td>10</td><td>SSRF</td><td>Validate URLs, block internal network access</td></tr>
</table>`
    },
    {
      title: "Theory — Container & Infrastructure Security",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Container Image Scanning (Trivy)</h4>
<pre><code># Install Trivy
sudo apt install -y trivy

# Scan an image
trivy image nginx:latest
trivy image --severity HIGH,CRITICAL myapp:v1

# Scan filesystem
trivy fs /path/to/project

# Scan in CI/CD (GitHub Actions)
- name: Scan Docker image
  uses: aquasecurity/trivy-action@master
  with:
    image-ref: myapp:latest
    severity: 'CRITICAL,HIGH'
    exit-code: '1'    # Fail pipeline on findings</code></pre>

<h4>Secrets Management</h4>
<pre><code># Never do this:
DB_PASSWORD=mysecret    # in code, env files, or Docker images

# Best practices:
# 1. Use environment variables (not in code)
# 2. Use cloud secrets managers (AWS Secrets Manager, Azure Key Vault)
# 3. Use HashiCorp Vault
# 4. Use Kubernetes Secrets with encryption

# AWS Secrets Manager example
aws secretsmanager create-secret \\
  --name prod/db/password \\
  --secret-string "super-secret-password"

aws secretsmanager get-secret-value \\
  --secret-id prod/db/password</code></pre>

<h4>SSL/TLS</h4>
<pre><code># Generate a self-signed certificate (testing only)
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \\
  -keyout server.key -out server.crt \\
  -subj "/CN=myapp.example.com"

# Use Let's Encrypt for production (free certificates)
# Install certbot
sudo apt install certbot
sudo certbot certonly --standalone -d myapp.example.com

# In Kubernetes, use cert-manager for automatic TLS</code></pre>

<h4>Docker Security Hardening</h4>
<pre><code># 1. Run as non-root
USER 1001

# 2. Use read-only filesystem
docker run --read-only --tmpfs /tmp myapp

# 3. Drop all capabilities
docker run --cap-drop ALL myapp

# 4. Limit resources
docker run --memory=512m --cpus=1 --pids-limit=100 myapp

# 5. Use distroless or scratch base images
FROM gcr.io/distroless/static-debian12
COPY myapp /
CMD ["/myapp"]</code></pre>`
    },
    {
      title: "Hands-On Tasks",
      icon: "&#128295;",
      tag: "Practice",
      content: `<h4>Task 1: Scan Docker Images</h4>
<pre><code># Scan popular images
trivy image nginx:latest
trivy image node:18
trivy image python:3.11

# Compare with Alpine versions
trivy image node:18-alpine
# Notice significantly fewer vulnerabilities</code></pre>

<h4>Task 2: Implement Security in CI/CD</h4>
<pre><code># .github/workflows/security.yml
name: Security Scan
on: [push, pull_request]
jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Trivy vulnerability scanner
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          scan-ref: '.'
          severity: 'CRITICAL,HIGH'</code></pre>

<h4>Task 3: SSL/TLS Practice</h4>
<pre><code># Generate and inspect certificates
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \\
  -keyout test.key -out test.crt \\
  -subj "/CN=localhost"

# View certificate details
openssl x509 -in test.crt -text -noout</code></pre>`
    },
    {
      title: "Interview Preparation",
      icon: "&#127908;",
      tag: "Interview",
      content: `<div class="qa-block">
<p class="qa-q">Q: What is "shift-left" security?</p>
<p class="qa-a">A: Shift-left means moving security practices earlier in the development lifecycle. Instead of testing for security at the end, integrate it from the start: SAST during development, container scanning in CI, secrets management from day one, threat modeling during design.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How do you manage secrets in a Kubernetes environment?</p>
<p class="qa-a">A: Use Kubernetes Secrets (base64) with encryption at rest enabled, or external secrets managers (HashiCorp Vault, AWS Secrets Manager) with operators that sync secrets into K8s. Never store secrets in code, environment files, or Docker images.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is the difference between SAST and DAST?</p>
<p class="qa-a">A: SAST (Static Application Security Testing) analyzes source code for vulnerabilities without running it — early feedback, covers all code paths. DAST (Dynamic Application Security Testing) tests the running application from the outside — finds runtime issues but slower. Use both for comprehensive coverage.</p>
</div>`
    },
    {
      title: "Time Split (10 Hours)",
      icon: "&#9200;",
      tag: "Schedule",
      content: `<div class="time-split-grid">
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Theory & Reading</span></div>
<div class="time-split-item"><span class="ts-hours">3h</span><span class="ts-label">Hands-On Practice</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Project Work</span></div>
<div class="time-split-item"><span class="ts-hours">2h</span><span class="ts-label">Interview Prep</span></div>
</div>`
    }
  ]
},

// ===================== WEEK 15 =====================
{
  week: 15,
  title: "System Design, Scaling & Deployment Strategies",
  subtitle: "Design resilient systems and deploy with confidence",
  difficulty: "advanced",
  tools: ["Load Balancers", "CDN", "Auto Scaling", "Feature Flags"],
  timeSplit: { theory: 4, handson: 3, interview: 2, project: 1 },
  checkpoints: [
    "Design scalable architectures",
    "Implement deployment strategies",
    "Configure load balancing",
    "Plan for high availability",
    "Understand caching and CDNs"
  ],
  sections: [
    {
      title: "Learning Objectives",
      icon: "&#127919;",
      tag: "Goals",
      content: `<ul>
<li>Design scalable, fault-tolerant systems</li>
<li>Understand horizontal vs vertical scaling</li>
<li>Implement Blue-Green, Canary, and Rolling deployments</li>
<li>Configure load balancing and auto-scaling</li>
<li>Design for high availability and disaster recovery</li>
</ul>`
    },
    {
      title: "Theory — Scaling & High Availability",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Scaling Types</h4>
<table>
<tr><th>Type</th><th>Description</th><th>Pros</th><th>Cons</th></tr>
<tr><td><strong>Vertical</strong></td><td>Bigger machine (more CPU/RAM)</td><td>Simple, no code changes</td><td>Hardware limits, single point of failure</td></tr>
<tr><td><strong>Horizontal</strong></td><td>More machines</td><td>No theoretical limit, fault tolerance</td><td>Complexity, stateless requirement</td></tr>
</table>

<h4>High Availability Design Principles</h4>
<ul>
<li><strong>Redundancy:</strong> No single point of failure. Replicate everything.</li>
<li><strong>Multi-AZ:</strong> Deploy across availability zones</li>
<li><strong>Health Checks:</strong> Detect and replace unhealthy instances</li>
<li><strong>Graceful Degradation:</strong> Partial functionality over total failure</li>
<li><strong>Circuit Breakers:</strong> Prevent cascade failures</li>
</ul>

<h4>Load Balancing</h4>
<pre><code># Types:
# Layer 4 (TCP) — Fast, simple routing based on IP/port
# Layer 7 (HTTP) — Smart routing based on URL, headers, cookies

# AWS ALB example (Terraform)
resource "aws_lb" "main" {
  name               = "app-lb"
  internal           = false
  load_balancer_type = "application"
  subnets            = [aws_subnet.public_a.id, aws_subnet.public_b.id]
}

# Algorithms:
# Round Robin     — Distribute evenly in order
# Least Connections — Send to least busy server
# IP Hash         — Same client always goes to same server
# Weighted        — More traffic to powerful servers</code></pre>

<h4>Caching Strategies</h4>
<pre><code># Cache layers:
Browser Cache → CDN (CloudFront) → Application Cache (Redis) → Database Cache

# CDN (Content Delivery Network)
# Distributes static content to edge locations worldwide
# Reduces latency by serving from nearest location

# Redis caching example
# Cache-aside pattern:
# 1. Check cache → if hit, return cached data
# 2. If miss → query database
# 3. Store result in cache with TTL
# 4. Return data</code></pre>

<h4>Auto Scaling</h4>
<pre><code># AWS Auto Scaling Group (Terraform)
resource "aws_autoscaling_group" "web" {
  min_size         = 2
  max_size         = 10
  desired_capacity = 3

  # Scale up when CPU > 70%
  # Scale down when CPU < 30%
  # Cool-down period: 300 seconds
}</code></pre>`
    },
    {
      title: "Theory — Deployment Strategies",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Deployment Strategies Comparison</h4>
<table>
<tr><th>Strategy</th><th>Downtime</th><th>Risk</th><th>Rollback Speed</th></tr>
<tr><td>Recreate</td><td>Yes</td><td>High</td><td>Slow</td></tr>
<tr><td>Rolling Update</td><td>No</td><td>Medium</td><td>Medium</td></tr>
<tr><td>Blue-Green</td><td>No</td><td>Low</td><td>Instant</td></tr>
<tr><td>Canary</td><td>No</td><td>Very Low</td><td>Fast</td></tr>
<tr><td>A/B Testing</td><td>No</td><td>Very Low</td><td>Fast</td></tr>
</table>

<h4>Blue-Green Deployment</h4>
<pre><code># Two identical environments
# Blue = current production
# Green = new version

# Steps:
# 1. Deploy new version to Green environment
# 2. Run smoke tests on Green
# 3. Switch load balancer from Blue → Green
# 4. Blue becomes standby (instant rollback if needed)

[Load Balancer]
    │
    ├── Blue (v1.0) ← current traffic
    │
    └── Green (v1.1) ← deploy & test here

# After switch:
    ├── Blue (v1.0) ← standby/rollback
    └── Green (v1.1) ← now serving traffic</code></pre>

<h4>Canary Deployment</h4>
<pre><code># Gradually shift traffic to the new version

# Phase 1: 5% traffic to v2
[Load Balancer]
    ├── 95% → v1 (10 instances)
    └── 5% → v2 (1 instance)

# Phase 2: Monitor metrics. If good, increase.
    ├── 75% → v1
    └── 25% → v2

# Phase 3: Full rollout
    └── 100% → v2

# In Kubernetes:
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-canary
spec:
  replicas: 1    # 1 canary vs 9 stable = 10% traffic
  template:
    spec:
      containers:
        - image: myapp:v2</code></pre>

<h4>Rolling Update (Kubernetes Default)</h4>
<pre><code>spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1        # max pods above desired during update
      maxUnavailable: 0   # zero downtime

# Update happens gradually:
# Pod 1: v1 → v2 (new pod starts, old terminates)
# Pod 2: v1 → v2
# Pod 3: v1 → v2
# ...until all pods are updated</code></pre>`
    },
    {
      title: "Theory — System Design for DevOps",
      icon: "&#128218;",
      tag: "Theory",
      content: `<h4>Typical Web Application Architecture</h4>
<pre><code>Users → CDN → Load Balancer → Web Servers → API Servers → Database
                                    │              │           │
                                    │              │    Read Replicas
                                    │              │
                                    │         Cache (Redis)
                                    │
                              Static Files (S3)</code></pre>

<h4>Microservices Architecture</h4>
<pre><code>                    [API Gateway]
                    /    |     \\
            [Auth]  [Orders]  [Payment]
              |        |         |
           [User DB] [Order DB] [Payment DB]

Each service:
- Has its own database
- Deploys independently
- Communicates via API/events
- Can be scaled independently</code></pre>

<h4>Design Checklist for DevOps</h4>
<ul>
<li>Is it <strong>stateless</strong>? (Session data in Redis/DB, not in memory)</li>
<li>Is it <strong>horizontally scalable</strong>? (Add more instances)</li>
<li>Does it have <strong>health endpoints</strong>? (/health, /ready)</li>
<li>Are there <strong>circuit breakers</strong>? (Prevent cascade failures)</li>
<li>Is it <strong>observable</strong>? (Metrics, logs, traces)</li>
<li>Is it <strong>configurable</strong>? (Environment variables, not hardcoded)</li>
<li>Is it <strong>resilient</strong>? (Retries, timeouts, fallbacks)</li>
</ul>`
    },
    {
      title: "Interview Preparation",
      icon: "&#127908;",
      tag: "Interview",
      content: `<div class="qa-block">
<p class="qa-q">Q: Explain Blue-Green deployment.</p>
<p class="qa-a">A: Blue-Green maintains two identical production environments. Blue runs the current version, Green gets the new version. After testing Green, you switch the load balancer to route all traffic from Blue to Green. Rollback is instant — just switch back. Downside: double the infrastructure cost during deployment.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: How would you design a system for 99.99% uptime?</p>
<p class="qa-a">A: Multi-AZ/region deployment, load balancers with health checks, auto-scaling groups, database replication (Multi-AZ RDS), caching layers (Redis/CloudFront), circuit breakers, automated failover, comprehensive monitoring with alerts, and incident response procedures. Also: chaos engineering to test resilience.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is the difference between horizontal and vertical scaling?</p>
<p class="qa-a">A: Vertical scaling (scale up) means adding more power (CPU/RAM) to an existing machine. Horizontal scaling (scale out) means adding more machines. Horizontal is preferred because it offers redundancy, no hardware ceiling, and better fault tolerance — but requires stateless application design.</p>
</div>

<div class="qa-block">
<p class="qa-q">Q: What is a circuit breaker pattern?</p>
<p class="qa-a">A: A circuit breaker prevents cascade failures in distributed systems. When a service fails repeatedly, the circuit "opens" and returns a fallback response immediately instead of making more failing calls. After a timeout, it "half-opens" to test if the service recovered.</p>
</div>`
    },
    {
      title: "Time Split (10 Hours)",
      icon: "&#9200;",
      tag: "Schedule",
      content: `<div class="time-split-grid">
<div class="time-split-item"><span class="ts-hours">4h</span><span class="ts-label">Theory & Reading</span></div>
<div class="time-split-item"><span class="ts-hours">3h</span><span class="ts-label">Hands-On Practice</span></div>
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Project Work</span></div>
<div class="time-split-item"><span class="ts-hours">2h</span><span class="ts-label">Interview Prep</span></div>
</div>`
    }
  ]
},

// ===================== WEEK 16 =====================
{
  week: 16,
  title: "Capstone Projects & Interview Mastery",
  subtitle: "Apply everything you've learned to real-world projects",
  difficulty: "advanced",
  tools: ["All Previous Tools"],
  timeSplit: { theory: 1, handson: 5, interview: 2, project: 2 },
  checkpoints: [
    "Complete Capstone Project 1",
    "Complete Capstone Project 2",
    "Complete Capstone Project 3",
    "Pass mock interview",
    "Build portfolio"
  ],
  sections: [
    {
      title: "Learning Objectives",
      icon: "&#127919;",
      tag: "Goals",
      content: `<ul>
<li>Apply all 15 weeks of learning to real-world projects</li>
<li>Build a production-grade DevOps portfolio</li>
<li>Master interview questions across all topics</li>
<li>Create documentation for your projects</li>
</ul>`
    },
    {
      title: "Capstone Project 1: Full CI/CD Pipeline for Microservices",
      icon: "&#127942;",
      tag: "Capstone",
      content: `<h4>Problem Statement</h4>
<p>Build a complete CI/CD pipeline that takes a microservices application from code commit to production deployment on Kubernetes.</p>

<h4>Architecture</h4>
<pre><code>GitHub Repo → GitHub Actions CI → Docker Build → Push to Registry
                                                        │
                                                        ▼
                                              Kubernetes Cluster
                                              ├── Frontend (React)
                                              ├── API Service (Node.js)
                                              ├── Database (PostgreSQL)
                                              └── Redis (Cache)

Monitoring: Prometheus + Grafana
Ingress: NGINX Ingress Controller</code></pre>

<h4>Steps</h4>
<ol>
<li>Create a simple microservices app (frontend + API + DB)</li>
<li>Containerize each service with optimized Dockerfiles</li>
<li>Write Docker Compose for local development</li>
<li>Create Kubernetes manifests (Deployments, Services, Ingress)</li>
<li>Write GitHub Actions workflow: lint → test → build → scan → deploy</li>
<li>Implement rolling update deployment strategy</li>
<li>Add Prometheus monitoring and Grafana dashboards</li>
<li>Write documentation (README, architecture diagram)</li>
</ol>

<h4>Expected Outcome</h4>
<p>A complete, automated pipeline where pushing code triggers testing, building, and deployment to Kubernetes with zero downtime.</p>

<h4>Real-World Relevance</h4>
<p>This is exactly what DevOps engineers build and maintain daily. It demonstrates CI/CD, containerization, orchestration, and monitoring skills — the core of a DevOps role.</p>`
    },
    {
      title: "Capstone Project 2: Infrastructure as Code with Terraform",
      icon: "&#127942;",
      tag: "Capstone",
      content: `<h4>Problem Statement</h4>
<p>Provision a complete AWS infrastructure for a web application using only Terraform. No manual console clicking.</p>

<h4>Architecture</h4>
<pre><code>┌── VPC (10.0.0.0/16) ──────────────────────────────────┐
│  ┌── Public Subnets (2 AZs) ─┐                         │
│  │  ALB (Application Load     │                         │
│  │       Balancer)             │                         │
│  │  NAT Gateway                │                         │
│  └────────────────────────────┘                         │
│  ┌── Private Subnets (2 AZs) ─┐                        │
│  │  Auto Scaling Group         │                         │
│  │  (EC2 instances)            │                         │
│  │  RDS Multi-AZ               │                         │
│  │  (PostgreSQL)               │                         │
│  └─────────────────────────────┘                        │
└─────────────────────────────────────────────────────────┘
  + S3 (static assets) + CloudFront (CDN)
  + Route 53 (DNS) + ACM (SSL)</code></pre>

<h4>Steps</h4>
<ol>
<li>Create Terraform modules: VPC, EC2, RDS, ALB, S3</li>
<li>Use variables and tfvars for dev/prod environments</li>
<li>Configure remote state with S3 backend + DynamoDB locking</li>
<li>Implement security groups and IAM roles</li>
<li>Add outputs for key resource identifiers</li>
<li>Write CI/CD pipeline for Terraform (plan on PR, apply on merge)</li>
<li>Document the architecture and modules</li>
</ol>

<h4>Expected Outcome</h4>
<p>Running <code>terraform apply</code> creates a complete, production-ready AWS infrastructure in minutes. Different environments use different variable files.</p>

<h4>Real-World Relevance</h4>
<p>IaC is how modern companies manage cloud infrastructure. This project demonstrates proficiency in Terraform, AWS, networking, and security — essential for any DevOps role.</p>`
    },
    {
      title: "Capstone Project 3: Monitoring & Incident Response Platform",
      icon: "&#127942;",
      tag: "Capstone",
      content: `<h4>Problem Statement</h4>
<p>Build a comprehensive monitoring stack that provides observability into a deployed application and automates incident detection and notification.</p>

<h4>Architecture</h4>
<pre><code>Application → Prometheus (metrics) → Grafana (dashboards)
    │                                      │
    ├──→ Filebeat → Elasticsearch → Kibana (logs)
    │
    └──→ AlertManager → Slack/Email (notifications)

Components deployed on Kubernetes with Helm charts</code></pre>

<h4>Steps</h4>
<ol>
<li>Deploy a sample application with custom metrics endpoint</li>
<li>Set up Prometheus with service discovery for Kubernetes</li>
<li>Create Grafana dashboards (system, application, business metrics)</li>
<li>Configure alert rules (CPU, memory, error rate, latency)</li>
<li>Set up Alertmanager with Slack/email integration</li>
<li>Deploy EFK stack (Elasticsearch, Filebeat, Kibana) for logging</li>
<li>Create runbooks for each alert</li>
<li>Simulate failures and verify alerting works</li>
</ol>

<h4>Expected Outcome</h4>
<p>A monitoring platform that proactively detects issues, alerts the team, and provides dashboards for troubleshooting — before users report problems.</p>

<h4>Real-World Relevance</h4>
<p>Monitoring is the backbone of reliable operations. On-call engineers use these exact tools daily. Demonstrating this skill set shows you can maintain production systems.</p>`
    },
    {
      title: "Comprehensive Interview Q&A",
      icon: "&#127908;",
      tag: "Interview",
      content: `<h4>Linux & Shell</h4>
<div class="qa-block">
<p class="qa-q">Q: How would you troubleshoot a Linux server that is running slowly?</p>
<p class="qa-a">A: Systematic approach: 1) <code>top/htop</code> for CPU & memory hogs, 2) <code>df -h</code> for disk space, 3) <code>iostat</code> for disk I/O, 4) <code>netstat/ss</code> for network connections, 5) <code>dmesg</code> for kernel messages, 6) <code>journalctl</code> for service logs, 7) Check if it's CPU-bound, I/O-bound, or memory-bound and address accordingly.</p>
</div>

<h4>Docker</h4>
<div class="qa-block">
<p class="qa-q">Q: A Docker container keeps restarting. How do you debug it?</p>
<p class="qa-a">A: 1) <code>docker logs container-name</code> to check error messages, 2) <code>docker inspect</code> to check exit code and configuration, 3) <code>docker events</code> to see container lifecycle events, 4) Run the container interactively to see what happens: <code>docker run -it image bash</code>, 5) Check health checks and resource limits.</p>
</div>

<h4>Kubernetes</h4>
<div class="qa-block">
<p class="qa-q">Q: A Pod is stuck in CrashLoopBackOff. How do you diagnose it?</p>
<p class="qa-a">A: 1) <code>kubectl describe pod</code> — check Events section, 2) <code>kubectl logs pod --previous</code> — logs from the crashed container, 3) Check resource limits (OOMKilled?), 4) Verify ConfigMaps/Secrets exist, 5) Check readiness/liveness probe configuration, 6) Verify the image exists and command is correct.</p>
</div>

<h4>CI/CD</h4>
<div class="qa-block">
<p class="qa-q">Q: How do you ensure zero-downtime deployments?</p>
<p class="qa-a">A: Rolling updates (Kubernetes default) with readiness probes, blue-green deployments (instant switch), canary deployments (gradual traffic shift). Key requirements: health check endpoints, graceful shutdown handling, database migrations that are backward compatible.</p>
</div>

<h4>Terraform</h4>
<div class="qa-block">
<p class="qa-q">Q: Your Terraform state file is corrupted. What do you do?</p>
<p class="qa-a">A: 1) Check for state backups (S3 versioning should be enabled), 2) Restore from the latest backup, 3) If no backup, use <code>terraform import</code> to re-import existing resources into state, 4) Prevention: always use remote state with versioning and locking (S3 + DynamoDB).</p>
</div>

<h4>System Design</h4>
<div class="qa-block">
<p class="qa-q">Q: Design the infrastructure for a startup expecting rapid growth.</p>
<p class="qa-a">A: Start simple, design for scale: containerized app on ECS/EKS, RDS with read replicas, Redis for caching, ALB for load balancing, S3+CloudFront for static assets. Everything in Terraform, CI/CD from day one, monitoring with Prometheus/Grafana. Auto-scaling groups. Keep it stateless. Plan for multi-region when growth demands it.</p>
</div>`
    },
    {
      title: "Time Split (10 Hours)",
      icon: "&#9200;",
      tag: "Schedule",
      content: `<div class="time-split-grid">
<div class="time-split-item"><span class="ts-hours">1h</span><span class="ts-label">Theory Review</span></div>
<div class="time-split-item"><span class="ts-hours">5h</span><span class="ts-label">Capstone Projects</span></div>
<div class="time-split-item"><span class="ts-hours">2h</span><span class="ts-label">Interview Practice</span></div>
<div class="time-split-item"><span class="ts-hours">2h</span><span class="ts-label">Portfolio & Docs</span></div>
</div>`
    }
  ]
}
]; // End of courseData

// ---- RESOURCES DATA ----
const resourcesData = [
  {
    category: "Linux Cheat Sheet",
    items: `<pre><code># File Operations
ls -la          # list all files with details
cd /path        # change directory
cp src dst      # copy file
mv old new      # move/rename
rm -rf dir      # remove directory
chmod 755 file  # set permissions
chown user file # change owner

# System Info
uname -a        # system info
df -h           # disk usage
free -h         # memory usage
top / htop      # process monitor
ps aux          # list processes

# Networking
ip addr show    # show IP addresses
ss -tlnp        # show listening ports
ping host       # test connectivity
curl URL        # make HTTP request
dig domain      # DNS lookup

# Text Processing
grep pattern file    # search in file
sed 's/old/new/g'   # find and replace
awk '{print $1}'    # extract columns
wc -l file          # count lines
sort | uniq -c      # sort and count unique</code></pre>`
  },
  {
    category: "Docker Cheat Sheet",
    items: `<pre><code># Containers
docker run -d -p 80:80 --name web nginx
docker ps / docker ps -a
docker stop/start/restart name
docker rm name / docker rm -f name
docker exec -it name bash
docker logs -f name

# Images
docker build -t name:tag .
docker pull image:tag
docker push image:tag
docker images / docker rmi image

# Compose
docker compose up -d
docker compose down
docker compose logs -f
docker compose exec service bash

# Cleanup
docker system prune -a
docker volume prune</code></pre>`
  },
  {
    category: "Kubernetes Cheat Sheet",
    items: `<pre><code># Resources
kubectl get pods/deployments/services/all
kubectl describe pod name
kubectl logs pod-name [-f]
kubectl exec -it pod-name -- bash

# CRUD
kubectl apply -f manifest.yaml
kubectl delete -f manifest.yaml
kubectl create deployment name --image=img

# Scaling & Updates
kubectl scale deployment name --replicas=5
kubectl set image deployment/name container=img:tag
kubectl rollout undo deployment/name
kubectl rollout status deployment/name

# Debugging
kubectl get events --sort-by=.metadata.creationTimestamp
kubectl top pods/nodes
kubectl describe pod name  # check Events section</code></pre>`
  },
  {
    category: "Terraform Cheat Sheet",
    items: `<pre><code># Workflow
terraform init       # initialize
terraform plan       # preview changes
terraform apply      # create resources
terraform destroy    # remove resources

# State
terraform state list
terraform state show resource
terraform import resource id

# Tips
terraform fmt        # format code
terraform validate   # check syntax
terraform output     # show outputs</code></pre>`
  },
  {
    category: "Git Cheat Sheet",
    items: `<pre><code># Basics
git init / git clone URL
git add . / git add file
git commit -m "message"
git push / git pull
git status / git log --oneline

# Branching
git checkout -b branch
git merge branch
git branch -d branch
git stash / git stash pop

# Undo
git reset --soft HEAD~1
git revert commit-hash
git checkout -- file</code></pre>`
  }
];


// ==================================
// INTERACTIVE DASHBOARD LOGIC
// All 13 features included
// ==================================

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

let currentWeek = null;
let activeDiffFilter = 'all';

// ---- COMMAND GLOSSARY DATA ----
const glossaryData = [
  { cmd: 'ls', desc: 'List directory contents', tool: 'Linux', usage: 'ls -la /path' },
  { cmd: 'cd', desc: 'Change directory', tool: 'Linux', usage: 'cd /home/user' },
  { cmd: 'pwd', desc: 'Print working directory', tool: 'Linux', usage: 'pwd' },
  { cmd: 'cp', desc: 'Copy files or directories', tool: 'Linux', usage: 'cp -r src dst' },
  { cmd: 'mv', desc: 'Move or rename files', tool: 'Linux', usage: 'mv old.txt new.txt' },
  { cmd: 'rm', desc: 'Remove files or directories', tool: 'Linux', usage: 'rm -rf dir/' },
  { cmd: 'chmod', desc: 'Change file permissions', tool: 'Linux', usage: 'chmod 755 script.sh' },
  { cmd: 'chown', desc: 'Change file ownership', tool: 'Linux', usage: 'chown user:group file' },
  { cmd: 'grep', desc: 'Search text patterns in files', tool: 'Linux', usage: 'grep -r "pattern" /path' },
  { cmd: 'find', desc: 'Search for files', tool: 'Linux', usage: 'find / -name "*.log"' },
  { cmd: 'ps', desc: 'List running processes', tool: 'Linux', usage: 'ps aux' },
  { cmd: 'top', desc: 'Real-time process monitor', tool: 'Linux', usage: 'top' },
  { cmd: 'kill', desc: 'Terminate a process', tool: 'Linux', usage: 'kill -9 PID' },
  { cmd: 'df', desc: 'Disk space usage', tool: 'Linux', usage: 'df -h' },
  { cmd: 'du', desc: 'Directory size', tool: 'Linux', usage: 'du -sh /var/log' },
  { cmd: 'free', desc: 'Memory usage', tool: 'Linux', usage: 'free -h' },
  { cmd: 'systemctl', desc: 'Manage systemd services', tool: 'Linux', usage: 'systemctl status nginx' },
  { cmd: 'journalctl', desc: 'View systemd logs', tool: 'Linux', usage: 'journalctl -u nginx -f' },
  { cmd: 'crontab', desc: 'Schedule recurring tasks', tool: 'Linux', usage: 'crontab -e' },
  { cmd: 'curl', desc: 'Transfer data via URLs', tool: 'Networking', usage: 'curl -X GET https://api.example.com' },
  { cmd: 'ping', desc: 'Test network connectivity', tool: 'Networking', usage: 'ping -c 4 google.com' },
  { cmd: 'dig', desc: 'DNS lookup', tool: 'Networking', usage: 'dig google.com MX' },
  { cmd: 'ss', desc: 'Show listening ports', tool: 'Networking', usage: 'ss -tlnp' },
  { cmd: 'traceroute', desc: 'Trace packet route', tool: 'Networking', usage: 'traceroute google.com' },
  { cmd: 'ufw', desc: 'Uncomplicated firewall', tool: 'Networking', usage: 'sudo ufw allow 80/tcp' },
  { cmd: 'git init', desc: 'Initialize a Git repository', tool: 'Git', usage: 'git init' },
  { cmd: 'git clone', desc: 'Clone a remote repository', tool: 'Git', usage: 'git clone URL' },
  { cmd: 'git add', desc: 'Stage files for commit', tool: 'Git', usage: 'git add .' },
  { cmd: 'git commit', desc: 'Save staged changes', tool: 'Git', usage: 'git commit -m "message"' },
  { cmd: 'git push', desc: 'Upload commits to remote', tool: 'Git', usage: 'git push origin main' },
  { cmd: 'git pull', desc: 'Download and merge remote changes', tool: 'Git', usage: 'git pull origin main' },
  { cmd: 'git branch', desc: 'List or create branches', tool: 'Git', usage: 'git branch feature-x' },
  { cmd: 'git merge', desc: 'Merge branches', tool: 'Git', usage: 'git merge feature-x' },
  { cmd: 'git stash', desc: 'Temporarily save changes', tool: 'Git', usage: 'git stash / git stash pop' },
  { cmd: 'git log', desc: 'View commit history', tool: 'Git', usage: 'git log --oneline --graph' },
  { cmd: 'docker run', desc: 'Create and start a container', tool: 'Docker', usage: 'docker run -d -p 80:80 nginx' },
  { cmd: 'docker build', desc: 'Build image from Dockerfile', tool: 'Docker', usage: 'docker build -t app:v1 .' },
  { cmd: 'docker ps', desc: 'List running containers', tool: 'Docker', usage: 'docker ps -a' },
  { cmd: 'docker exec', desc: 'Run command in container', tool: 'Docker', usage: 'docker exec -it name bash' },
  { cmd: 'docker logs', desc: 'View container logs', tool: 'Docker', usage: 'docker logs -f name' },
  { cmd: 'docker stop', desc: 'Stop a running container', tool: 'Docker', usage: 'docker stop name' },
  { cmd: 'docker compose up', desc: 'Start multi-container app', tool: 'Docker', usage: 'docker compose up -d' },
  { cmd: 'docker compose down', desc: 'Stop multi-container app', tool: 'Docker', usage: 'docker compose down -v' },
  { cmd: 'kubectl get', desc: 'List Kubernetes resources', tool: 'Kubernetes', usage: 'kubectl get pods -A' },
  { cmd: 'kubectl apply', desc: 'Apply a manifest file', tool: 'Kubernetes', usage: 'kubectl apply -f deploy.yaml' },
  { cmd: 'kubectl describe', desc: 'Detailed resource info', tool: 'Kubernetes', usage: 'kubectl describe pod name' },
  { cmd: 'kubectl logs', desc: 'View pod logs', tool: 'Kubernetes', usage: 'kubectl logs -f pod-name' },
  { cmd: 'kubectl exec', desc: 'Run command in pod', tool: 'Kubernetes', usage: 'kubectl exec -it pod -- bash' },
  { cmd: 'kubectl scale', desc: 'Scale a deployment', tool: 'Kubernetes', usage: 'kubectl scale deploy app --replicas=5' },
  { cmd: 'kubectl rollout', desc: 'Manage rollouts', tool: 'Kubernetes', usage: 'kubectl rollout undo deploy/app' },
  { cmd: 'helm install', desc: 'Install a Helm chart', tool: 'Kubernetes', usage: 'helm install release chart' },
  { cmd: 'helm upgrade', desc: 'Upgrade a Helm release', tool: 'Kubernetes', usage: 'helm upgrade release chart' },
  { cmd: 'terraform init', desc: 'Initialize Terraform', tool: 'Terraform', usage: 'terraform init' },
  { cmd: 'terraform plan', desc: 'Preview infrastructure changes', tool: 'Terraform', usage: 'terraform plan' },
  { cmd: 'terraform apply', desc: 'Apply infrastructure changes', tool: 'Terraform', usage: 'terraform apply' },
  { cmd: 'terraform destroy', desc: 'Destroy all resources', tool: 'Terraform', usage: 'terraform destroy' },
  { cmd: 'terraform state', desc: 'Manage state', tool: 'Terraform', usage: 'terraform state list' },
  { cmd: 'aws s3', desc: 'Manage S3 buckets and objects', tool: 'AWS', usage: 'aws s3 cp file s3://bucket/' },
  { cmd: 'aws ec2', desc: 'Manage EC2 instances', tool: 'AWS', usage: 'aws ec2 describe-instances' },
  { cmd: 'trivy', desc: 'Scan images for vulnerabilities', tool: 'Security', usage: 'trivy image nginx:latest' },
];

// ---- DOM REFS ----
const sidebarNav = $('#sidebarNav');
const weekContent = $('#weekContent');
const weekHeader = $('#weekHeader');
const weekProgressRow = $('#weekProgressRow');
const weekSections = $('#weekSections');
const weekNotes = $('#weekNotes');
const globalProgressBar = $('#globalProgressBar');
const globalProgressText = $('#globalProgressText');
const searchInput = $('#searchInput');
const sidebar = $('#sidebar');

// ---- HELPERS ----
const allPages = () => ['welcomeScreen','weekContent','resourcesPage','roadmapPage','bookmarksPage','quizPage','glossaryPage','calendarPage'];
function showPage(id) {
  allPages().forEach(p => {
    const el = $('#' + p);
    if (el) { el.style.display = 'none'; el.classList.add('page-hidden'); }
  });
  const target = $('#' + id);
  if (target) { target.style.display = 'block'; target.classList.remove('page-hidden'); }
  $$('.nav-item').forEach(el => el.classList.remove('active'));
  closeMobileSidebar();
}
function closeMobileSidebar() {
  sidebar.classList.remove('open');
  const ov = $('.sidebar-overlay');
  if (ov) ov.classList.remove('show');
}
function diffClass(d) {
  return d === 'beginner' ? 'diff-beginner' : d === 'intermediate' ? 'diff-intermediate' : 'diff-advanced';
}

// ---- PROGRESS (localStorage) ----
function getProgress(wk) { try { return JSON.parse(localStorage.getItem('devops_progress_w' + wk) || '[]'); } catch { return []; } }
function setProgress(wk, arr) { localStorage.setItem('devops_progress_w' + wk, JSON.stringify(arr)); }
function isWeekCompleted(wk) { const w = courseData.find(x => x.week === wk); return w ? getProgress(wk).length === w.checkpoints.length : false; }
function updateGlobalProgress() {
  let total = 0, done = 0;
  courseData.forEach(w => { total += w.checkpoints.length; done += getProgress(w.week).length; });
  const pct = total ? Math.round(done / total * 100) : 0;
  globalProgressBar.style.width = pct + '%';
  globalProgressText.textContent = pct + '% Complete';
}

// ---- NOTES ----
function getNotes(wk) { return localStorage.getItem('devops_notes_w' + wk) || ''; }
function setNotes(wk, t) { localStorage.setItem('devops_notes_w' + wk, t); }

// ---- THEME ----
function applyTheme() { document.documentElement.setAttribute('data-theme', localStorage.getItem('devops_theme') || 'dark'); }
function toggleTheme() {
  const n = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', n);
  localStorage.setItem('devops_theme', n);
}

// ---- FONT SIZE (Feature 12) ----
function applyFontScale() {
  const s = parseFloat(localStorage.getItem('devops_font_scale') || '1');
  document.documentElement.style.setProperty('--font-scale', s);
}
function changeFontSize(delta) {
  let s = parseFloat(localStorage.getItem('devops_font_scale') || '1');
  s = Math.min(1.4, Math.max(0.8, +(s + delta).toFixed(2)));
  localStorage.setItem('devops_font_scale', s);
  applyFontScale();
}

// ---- BOOKMARKS (Feature 2) ----
function getBookmarks() { try { return JSON.parse(localStorage.getItem('devops_bookmarks') || '[]'); } catch { return []; } }
function setBookmarks(arr) { localStorage.setItem('devops_bookmarks', JSON.stringify(arr)); }
function toggleBookmark(wk, secIdx) {
  const bm = getBookmarks();
  const key = wk + ':' + secIdx;
  const idx = bm.indexOf(key);
  if (idx > -1) bm.splice(idx, 1); else bm.push(key);
  setBookmarks(bm);
}
function isBookmarked(wk, secIdx) { return getBookmarks().includes(wk + ':' + secIdx); }

// ---- ACTIVITY CALENDAR (Feature 9) ----
function recordActivity() {
  const today = new Date().toISOString().slice(0, 10);
  let cal = {};
  try { cal = JSON.parse(localStorage.getItem('devops_activity') || '{}'); } catch {}
  cal[today] = (cal[today] || 0) + 1;
  localStorage.setItem('devops_activity', JSON.stringify(cal));
}
function getActivity() { try { return JSON.parse(localStorage.getItem('devops_activity') || '{}'); } catch { return {}; } }

// ---- TIME TRACKER (Feature 4) ----
function getTimeLogged(wk) { return parseFloat(localStorage.getItem('devops_time_w' + wk) || '0'); }
function setTimeLogged(wk, h) { localStorage.setItem('devops_time_w' + wk, h); }

// ---- WEEKLY REVIEW (Feature 8) ----
function getReview(wk) { try { return JSON.parse(localStorage.getItem('devops_review_w' + wk) || '[]'); } catch { return []; } }
function setReview(wk, arr) { localStorage.setItem('devops_review_w' + wk, JSON.stringify(arr)); }

// ---- SEARCH ----
function handleSearch(query) {
  const q = query.toLowerCase().trim();
  $$('.nav-item').forEach(el => {
    const wk = +el.dataset.week;
    const w = courseData.find(x => x.week === wk);
    if (!w) return;
    const matchDiff = activeDiffFilter === 'all' || w.difficulty === activeDiffFilter;
    const matchSearch = q === '' || (w.title + ' ' + w.subtitle + ' ' + w.tools.join(' ') + ' week ' + wk).toLowerCase().includes(q);
    el.style.display = matchDiff && matchSearch ? '' : 'none';
  });
}

// ---- SIDEBAR ----
function renderSidebar() {
  sidebarNav.innerHTML = courseData.map(w => {
    const done = isWeekCompleted(w.week);
    return '<div class="nav-item ' + (done ? 'completed' : '') + '" data-week="' + w.week + '" data-diff="' + w.difficulty + '">' +
      '<span class="nav-check">' + (done ? '&#10003;' : '') + '</span>' +
      '<span class="nav-week-num">W' + w.week + '</span>' +
      '<span class="nav-title">' + w.title + '</span>' +
      '<span class="nav-difficulty ' + diffClass(w.difficulty) + '">' + w.difficulty.charAt(0).toUpperCase() + w.difficulty.slice(1) + '</span>' +
    '</div>';
  }).join('');
  handleSearch(searchInput.value);
}

// ---- SHOW WEEK (main content renderer) ----
function showWeek(weekNum) {
  const week = courseData.find(w => w.week === weekNum);
  if (!week) return;
  currentWeek = weekNum;
  showPage('weekContent');
  recordActivity();
  $$('.nav-item').forEach(el => el.classList.toggle('active', +el.dataset.week === weekNum));

  // Header
  weekHeader.innerHTML =
    '<h2>Week ' + week.week + ': ' + week.title + '</h2>' +
    '<p class="week-subtitle">' + week.subtitle + '</p>' +
    '<div class="week-meta">' +
      '<span class="week-meta-item"><span class="nav-difficulty ' + diffClass(week.difficulty) + '">' + week.difficulty + '</span></span>' +
      '<span class="week-meta-item">&#128295; ' + week.tools.join(', ') + '</span>' +
      '<span class="week-meta-item">&#9200; 10 hours</span>' +
    '</div>';

  // Time tracker (Feature 4)
  const logged = getTimeLogged(weekNum);
  const pct = Math.min(100, Math.round(logged / 10 * 100));
  $('#timeTracker').innerHTML =
    '<span class="time-tracker-label">Time Logged</span>' +
    '<div class="time-tracker-bar-bg"><div class="time-tracker-bar-fill' + (logged > 10 ? ' over' : '') + '" style="width:' + pct + '%"></div></div>' +
    '<div class="time-tracker-input"><input type="number" id="timeInput" min="0" max="99" step="0.5" value="' + logged + '"><span>/ 10 hrs</span></div>';

  // Checkpoints
  const saved = getProgress(weekNum);
  const allDone = saved.length === week.checkpoints.length;
  weekProgressRow.innerHTML =
    '<div class="progress-row-header">' +
      '<span class="progress-row-label">Progress: ' + saved.length + '/' + week.checkpoints.length + ' checkpoints</span>' +
      '<button class="btn-mark-week" data-week="' + weekNum + '">' + (allDone ? 'Unmark Week' : 'Mark Week Complete') + '</button>' +
    '</div>' +
    week.checkpoints.map(function(cp, i) {
      var chk = saved.includes(i);
      return '<label class="progress-checkbox ' + (chk ? 'checked' : '') + '">' +
        '<input type="checkbox" data-week="' + weekNum + '" data-idx="' + i + '"' + (chk ? ' checked' : '') + '> ' + cp +
      '</label>';
    }).join('');

  // TOC (Feature 6)
  $('#weekToc').innerHTML = '<h4>Sections</h4><ul class="toc-list">' +
    week.sections.map(function(sec, i) {
      return '<li><a href="#" data-toc="' + i + '">' + sec.title + '</a></li>';
    }).join('') + '</ul>';

  // Sections with bookmark stars (Feature 2)
  weekSections.innerHTML = week.sections.map(function(sec, i) {
    var starred = isBookmarked(weekNum, i);
    return '<div class="section-block" data-section="' + i + '" id="section-' + i + '">' +
      '<div class="section-header">' +
        '<span class="section-arrow">&#9654;</span>' +
        '<span class="section-icon">' + sec.icon + '</span>' +
        '<h3>' + sec.title + '</h3>' +
        '<span class="section-tag">' + sec.tag + '</span>' +
        '<span class="bookmark-star' + (starred ? ' bookmarked' : '') + '" data-bm-week="' + weekNum + '" data-bm-sec="' + i + '" title="Bookmark">' + (starred ? '&#9733;' : '&#9734;') + '</span>' +
      '</div>' +
      '<div class="section-body"><div class="section-content">' + sec.content + '</div></div>' +
    '</div>';
  }).join('');

  // Weekly review (Feature 8)
  renderWeekReview(weekNum, week);

  // Notes
  weekNotes.value = getNotes(weekNum);

  // Nav
  $('#prevWeekBtn').disabled = weekNum <= 1;
  $('#nextWeekBtn').disabled = weekNum >= courseData.length;

  // Inject copy buttons (Feature 7)
  injectCopyButtons();

  window.scrollTo(0, 0);
}

// ---- FEATURE 7: Code Copy Buttons ----
function injectCopyButtons() {
  document.querySelectorAll('.section-content pre, .cheat-sheet-block pre, .glossary-cmd pre').forEach(function(pre) {
    if (pre.querySelector('.code-copy-btn')) return;
    var btn = document.createElement('button');
    btn.className = 'code-copy-btn';
    btn.textContent = 'Copy';
    btn.addEventListener('click', function() {
      var code = pre.querySelector('code') ? pre.querySelector('code').textContent : pre.textContent;
      navigator.clipboard.writeText(code).then(function() {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function() { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 1500);
      });
    });
    pre.style.position = 'relative';
    pre.appendChild(btn);
  });
}

// ---- FEATURE 8: Weekly Self-Review ----
function renderWeekReview(weekNum, week) {
  var reviewItems = [
    'I can explain the key concepts from this week',
    'I completed all hands-on tasks',
    'I understand the real-world project',
    'I can answer the interview questions confidently',
    'I am ready to move to the next week'
  ];
  var saved = getReview(weekNum);
  $('#weekReview').innerHTML = '<h3>&#128221; Weekly Self-Assessment</h3>' +
    reviewItems.map(function(item, i) {
      var done = saved.includes(i);
      return '<label class="review-item' + (done ? ' review-done' : '') + '">' +
        '<input type="checkbox" data-ridx="' + i + '"' + (done ? ' checked' : '') + '> ' + item +
      '</label>';
    }).join('');
}

// ---- FEATURE 1: Print/Export ----
function printWeek() {
  if (!currentWeek) return;
  $$('.section-block').forEach(function(el) { el.classList.add('expanded'); });
  setTimeout(function() { window.print(); }, 200);
}

// ---- FEATURE 3: Quiz Mode ----
var quizQuestions = [];
var quizIdx = 0;
var quizCorrect = 0;

function collectQuizQuestions(weekFilter) {
  quizQuestions = [];
  courseData.forEach(function(w) {
    if (weekFilter !== 'all' && w.week !== +weekFilter) return;
    w.sections.forEach(function(sec) {
      if (sec.tag !== 'Interview') return;
      var container = document.createElement('div');
      container.innerHTML = sec.content;
      container.querySelectorAll('.qa-block').forEach(function(block) {
        var q = block.querySelector('.qa-q');
        var a = block.querySelector('.qa-a');
        if (q && a) quizQuestions.push({ q: q.textContent.replace(/^Q:\s*/, ''), a: a.textContent.replace(/^A:\s*/, ''), week: w.week });
      });
    });
  });
  // Shuffle
  for (var i = quizQuestions.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = quizQuestions[i]; quizQuestions[i] = quizQuestions[j]; quizQuestions[j] = tmp;
  }
}

function renderQuiz() {
  var area = $('#quizArea');
  if (!quizQuestions.length) { area.innerHTML = '<p class="empty-state">No questions found for the selected filter.</p>'; return; }
  if (quizIdx >= quizQuestions.length) {
    area.innerHTML = '<div class="quiz-score"><p>Quiz Complete!</p><span class="score-num">' + quizCorrect + ' / ' + quizQuestions.length + '</span><p style="margin-top:8px;color:var(--text-muted)">' + Math.round(quizCorrect/quizQuestions.length*100) + '% correct</p></div>';
    return;
  }
  var qItem = quizQuestions[quizIdx];
  area.innerHTML =
    '<div class="quiz-nav"><span class="quiz-progress">Question ' + (quizIdx+1) + ' of ' + quizQuestions.length + ' (Week ' + qItem.week + ')</span><span class="quiz-progress">Score: ' + quizCorrect + '</span></div>' +
    '<div class="quiz-card">' +
      '<p class="quiz-q">' + qItem.q + '</p>' +
      '<div class="quiz-a" id="quizAnswer">' + qItem.a + '</div>' +
      '<button class="quiz-reveal-btn" id="quizRevealBtn">Reveal Answer</button>' +
      '<div class="quiz-self-btns" id="quizSelfBtns" style="display:none">' +
        '<button class="quiz-self-btn correct" id="quizCorrectBtn">I knew it &#10003;</button>' +
        '<button class="quiz-self-btn wrong" id="quizWrongBtn">I didn\'t know &#10007;</button>' +
      '</div>' +
    '</div>';
}

function initQuizPage() {
  var sel = $('#quizWeekSelect');
  sel.innerHTML = '<option value="all">All Weeks</option>' +
    courseData.map(function(w) { return '<option value="' + w.week + '">Week ' + w.week + ': ' + w.title + '</option>'; }).join('');
}

// ---- FEATURE 10: Command Glossary ----
function renderGlossary(filter, search) {
  var tools = [];
  glossaryData.forEach(function(g) { if (tools.indexOf(g.tool) === -1) tools.push(g.tool); });
  $('#glossaryFilter').innerHTML = '<button class="glossary-filter-btn' + (!filter ? ' active' : '') + '" data-gtool="">All</button>' +
    tools.map(function(t) { return '<button class="glossary-filter-btn' + (filter === t ? ' active' : '') + '" data-gtool="' + t + '">' + t + '</button>'; }).join('');

  var q = (search || '').toLowerCase();
  var filtered = glossaryData.filter(function(g) {
    var matchTool = !filter || g.tool === filter;
    var matchSearch = !q || (g.cmd + ' ' + g.desc + ' ' + g.tool + ' ' + g.usage).toLowerCase().includes(q);
    return matchTool && matchSearch;
  });
  $('#glossaryContent').innerHTML = filtered.length ? filtered.map(function(g) {
    return '<div class="glossary-cmd"><h4>' + g.cmd + '</h4><p>' + g.desc + '</p><pre><code>' + g.usage + '</code></pre><span class="glossary-tool-tag">' + g.tool + '</span></div>';
  }).join('') : '<p class="empty-state">No commands match your search.</p>';

  injectCopyButtons();
}

// ---- FEATURE 9: Activity Calendar ----
function renderCalendar() {
  var cal = getActivity();
  var today = new Date();
  var totalDays = 0, streak = 0, maxStreak = 0, totalSessions = 0;

  // Calculate streak
  var d = new Date(today);
  for (var s = 0; s < 365; s++) {
    var key = d.toISOString().slice(0, 10);
    if (cal[key]) { streak++; d.setDate(d.getDate() - 1); } else break;
  }

  // Build 52-week grid (364 days back)
  var weeks = [];
  var start = new Date(today);
  start.setDate(start.getDate() - 363);
  // Align to Sunday
  start.setDate(start.getDate() - start.getDay());

  var cursor = new Date(start);
  while (cursor <= today) {
    var weekArr = [];
    for (var dw = 0; dw < 7; dw++) {
      var k = cursor.toISOString().slice(0, 10);
      var count = cal[k] || 0;
      if (count > 0) totalDays++;
      totalSessions += count;
      var level = count === 0 ? '' : count <= 1 ? 'l1' : count <= 3 ? 'l2' : 'l3';
      weekArr.push('<div class="cal-day ' + level + '" title="' + k + ': ' + count + ' sessions"></div>');
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push('<div class="cal-week">' + weekArr.join('') + '</div>');
  }

  $('#calendarGrid').innerHTML = weeks.join('');
  $('#streakStats').innerHTML =
    '<div class="streak-stat"><span class="ss-num">' + streak + '</span><span class="ss-label">Day Streak</span></div>' +
    '<div class="streak-stat"><span class="ss-num">' + totalDays + '</span><span class="ss-label">Active Days</span></div>' +
    '<div class="streak-stat"><span class="ss-num">' + totalSessions + '</span><span class="ss-label">Total Sessions</span></div>';
}

// ---- FEATURE 2: Bookmarks Page ----
function renderBookmarksPage() {
  var bm = getBookmarks();
  if (!bm.length) {
    $('#bookmarksContent').innerHTML = '<p class="empty-state">No bookmarks yet. Click the star on any section header to bookmark it.</p>';
    return;
  }
  $('#bookmarksContent').innerHTML = bm.map(function(key) {
    var parts = key.split(':');
    var wk = +parts[0], secIdx = +parts[1];
    var week = courseData.find(function(w) { return w.week === wk; });
    if (!week || !week.sections[secIdx]) return '';
    var sec = week.sections[secIdx];
    return '<div class="bookmark-card" data-bm-goto-week="' + wk + '" data-bm-goto-sec="' + secIdx + '">' +
      '<div class="bookmark-card-info"><h4>' + sec.title + '</h4><p>Week ' + wk + ': ' + week.title + '</p></div>' +
      '<button class="bookmark-remove" data-bm-rm="' + key + '" title="Remove">&times;</button>' +
    '</div>';
  }).join('');
}

// ---- FEATURE 13: Export Notes ----
function exportNotes() {
  var lines = ['# DevOps Mastery — My Notes\n'];
  courseData.forEach(function(w) {
    var note = getNotes(w.week);
    if (note.trim()) {
      lines.push('## Week ' + w.week + ': ' + w.title + '\n');
      lines.push(note + '\n');
    }
  });
  if (lines.length === 1) { alert('No notes to export.'); return; }
  var blob = new Blob([lines.join('\n')], { type: 'text/markdown' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'devops-mastery-notes.md';
  a.click();
  URL.revokeObjectURL(a.href);
}

// ---- RESOURCES & ROADMAP ----
function renderResources() {
  $('#resourcesContent').innerHTML = resourcesData.map(function(r) {
    return '<div class="resource-category"><h3>' + r.category + '</h3><div class="cheat-sheet-block">' + r.items + '</div></div>';
  }).join('');
}
function renderRoadmap() {
  $('#roadmapTimeline').innerHTML = courseData.map(function(w) {
    var done = isWeekCompleted(w.week);
    return '<div class="roadmap-item ' + (done ? 'rm-completed' : '') + '" data-week="' + w.week + '">' +
      '<h4>Week ' + w.week + ': ' + w.title + '</h4>' +
      '<p>' + w.subtitle + '</p>' +
      '<div class="rm-tools">' + w.tools.map(function(t) { return '<span class="rm-tool-tag">' + t + '</span>'; }).join('') + '</div>' +
    '</div>';
  }).join('');
}

// ---- EXPAND / COLLAPSE ----
function expandAll() { $$('.section-block').forEach(function(el) { el.classList.add('expanded'); }); }
function collapseAll() { $$('.section-block').forEach(function(el) { el.classList.remove('expanded'); }); }

// ---- KEYBOARD SHORTCUTS (Feature 5) ----
function handleKeyboard(e) {
  // Skip if typing in input/textarea
  var tag = (e.target.tagName || '').toLowerCase();
  if (tag === 'input' || tag === 'textarea' || tag === 'select') {
    if (e.key === 'Escape') e.target.blur();
    return;
  }
  var modal = $('#kbModal');
  switch (e.key) {
    case 'j': if (currentWeek && currentWeek < courseData.length) showWeek(currentWeek + 1); break;
    case 'k': if (currentWeek && currentWeek > 1) showWeek(currentWeek - 1); break;
    case 'e': expandAll(); break;
    case 'c': collapseAll(); break;
    case 'n': if (weekNotes) { weekNotes.focus(); e.preventDefault(); } break;
    case '/': searchInput.focus(); e.preventDefault(); break;
    case 'h': showPage('welcomeScreen'); currentWeek = null; break;
    case 'p': printWeek(); break;
    case 'd': toggleTheme(); break;
    case '?': modal.classList.toggle('show'); break;
    case 'Escape': modal.classList.remove('show'); break;
  }
}

// ---- BIND ALL EVENTS ----
function bindEvents() {
  // Sidebar nav
  sidebarNav.addEventListener('click', function(e) { var el = e.target.closest('.nav-item'); if (el) showWeek(+el.dataset.week); });

  // Section collapse/expand + bookmark stars
  weekSections.addEventListener('click', function(e) {
    var star = e.target.closest('.bookmark-star');
    if (star) {
      e.stopPropagation();
      var wk = +star.dataset.bmWeek, sec = +star.dataset.bmSec;
      toggleBookmark(wk, sec);
      star.classList.toggle('bookmarked');
      star.innerHTML = star.classList.contains('bookmarked') ? '&#9733;' : '&#9734;';
      return;
    }
    var header = e.target.closest('.section-header');
    if (header) header.parentElement.classList.toggle('expanded');
  });

  // TOC clicks
  $('#weekToc').addEventListener('click', function(e) {
    var a = e.target.closest('a[data-toc]');
    if (a) {
      e.preventDefault();
      var idx = +a.dataset.toc;
      var block = document.getElementById('section-' + idx);
      if (block) { block.classList.add('expanded'); block.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }
  });

  // Mark Week Complete
  weekProgressRow.addEventListener('click', function(e) {
    var btn = e.target.closest('.btn-mark-week');
    if (!btn) return;
    var wk = +btn.dataset.week;
    var week = courseData.find(function(w) { return w.week === wk; });
    if (!week) return;
    var allDone = getProgress(wk).length === week.checkpoints.length;
    setProgress(wk, allDone ? [] : week.checkpoints.map(function(_, i) { return i; }));
    updateGlobalProgress(); renderSidebar(); renderRoadmap(); showWeek(wk);
  });

  // Individual checkboxes
  weekProgressRow.addEventListener('change', function(e) {
    if (e.target.type !== 'checkbox') return;
    var wk = +e.target.dataset.week, idx = +e.target.dataset.idx;
    var saved = getProgress(wk);
    if (e.target.checked && !saved.includes(idx)) saved.push(idx);
    else { var pos = saved.indexOf(idx); if (pos > -1) saved.splice(pos, 1); }
    setProgress(wk, saved);
    e.target.parentElement.classList.toggle('checked', e.target.checked);
    var week = courseData.find(function(w) { return w.week === wk; });
    var lbl = weekProgressRow.querySelector('.progress-row-label');
    var mbtn = weekProgressRow.querySelector('.btn-mark-week');
    if (lbl && week) lbl.textContent = 'Progress: ' + saved.length + '/' + week.checkpoints.length + ' checkpoints';
    if (mbtn && week) mbtn.textContent = saved.length === week.checkpoints.length ? 'Unmark Week' : 'Mark Week Complete';
    updateGlobalProgress(); renderSidebar();
    if (currentWeek) $$('.nav-item').forEach(function(el) { el.classList.toggle('active', +el.dataset.week === currentWeek); });
    renderRoadmap();
  });

  // Time tracker input
  $('#timeTracker').addEventListener('change', function(e) {
    if (e.target.id === 'timeInput' && currentWeek) {
      setTimeLogged(currentWeek, parseFloat(e.target.value) || 0);
      showWeek(currentWeek);
    }
  });

  // Weekly review checkboxes
  $('#weekReview').addEventListener('change', function(e) {
    if (e.target.type !== 'checkbox' || !currentWeek) return;
    var idx = +e.target.dataset.ridx;
    var saved = getReview(currentWeek);
    if (e.target.checked && !saved.includes(idx)) saved.push(idx);
    else { var pos = saved.indexOf(idx); if (pos > -1) saved.splice(pos, 1); }
    setReview(currentWeek, saved);
    e.target.parentElement.classList.toggle('review-done', e.target.checked);
  });

  // Notes auto-save
  weekNotes.addEventListener('input', function() { if (currentWeek) setNotes(currentWeek, weekNotes.value); });

  // Top bar buttons
  $('#expandAllBtn').addEventListener('click', expandAll);
  $('#collapseAllBtn').addEventListener('click', collapseAll);
  $('#darkModeToggle').addEventListener('click', toggleTheme);
  $('#fontIncBtn').addEventListener('click', function() { changeFontSize(0.05); });
  $('#fontDecBtn').addEventListener('click', function() { changeFontSize(-0.05); });
  $('#startLearningBtn').addEventListener('click', function() { showWeek(1); });
  $('#prevWeekBtn').addEventListener('click', function() { if (currentWeek > 1) showWeek(currentWeek - 1); });
  $('#nextWeekBtn').addEventListener('click', function() { if (currentWeek < courseData.length) showWeek(currentWeek + 1); });
  $('#printWeekBtn').addEventListener('click', printWeek);

  // Sidebar page buttons
  $('#showResourcesBtn').addEventListener('click', function() { showPage('resourcesPage'); injectCopyButtons(); });
  $('#showRoadmapBtn').addEventListener('click', function() { showPage('roadmapPage'); renderRoadmap(); });
  $('#showBookmarksBtn').addEventListener('click', function() { showPage('bookmarksPage'); renderBookmarksPage(); });
  $('#showGlossaryBtn').addEventListener('click', function() { showPage('glossaryPage'); renderGlossary('', ''); injectCopyButtons(); });
  $('#showQuizBtn').addEventListener('click', function() { showPage('quizPage'); initQuizPage(); });
  $('#showCalendarBtn').addEventListener('click', function() { showPage('calendarPage'); renderCalendar(); });
  $('#exportNotesBtn').addEventListener('click', exportNotes);

  // Bookmarks page clicks
  $('#bookmarksContent').addEventListener('click', function(e) {
    var rm = e.target.closest('.bookmark-remove');
    if (rm) {
      e.stopPropagation();
      var key = rm.dataset.bmRm;
      var bm = getBookmarks();
      var idx = bm.indexOf(key);
      if (idx > -1) { bm.splice(idx, 1); setBookmarks(bm); }
      renderBookmarksPage();
      return;
    }
    var card = e.target.closest('.bookmark-card');
    if (card) {
      var wk = +card.dataset.bmGotoWeek, sec = +card.dataset.bmGotoSec;
      showWeek(wk);
      setTimeout(function() {
        var block = document.getElementById('section-' + sec);
        if (block) { block.classList.add('expanded'); block.scrollIntoView({ behavior: 'smooth' }); }
      }, 100);
    }
  });

  // Quiz page
  $('#startQuizBtn').addEventListener('click', function() {
    collectQuizQuestions($('#quizWeekSelect').value);
    quizIdx = 0; quizCorrect = 0;
    renderQuiz();
  });
  $('#quizArea').addEventListener('click', function(e) {
    if (e.target.id === 'quizRevealBtn') {
      $('#quizAnswer').classList.add('revealed');
      e.target.style.display = 'none';
      $('#quizSelfBtns').style.display = 'flex';
    }
    if (e.target.id === 'quizCorrectBtn') { quizCorrect++; quizIdx++; renderQuiz(); }
    if (e.target.id === 'quizWrongBtn') { quizIdx++; renderQuiz(); }
  });

  // Glossary search & filter
  var glossaryTool = '';
  $('#glossarySearch').addEventListener('input', function() { renderGlossary(glossaryTool, this.value); });
  $('#glossaryFilter').addEventListener('click', function(e) {
    var btn = e.target.closest('.glossary-filter-btn');
    if (!btn) return;
    glossaryTool = btn.dataset.gtool;
    renderGlossary(glossaryTool, $('#glossarySearch').value);
  });

  // Difficulty filter (Feature 11)
  $('#difficultyFilter').addEventListener('click', function(e) {
    var btn = e.target.closest('.diff-btn');
    if (!btn) return;
    activeDiffFilter = btn.dataset.diff;
    $$('.diff-btn').forEach(function(b) { b.classList.toggle('active', b.dataset.diff === activeDiffFilter); });
    handleSearch(searchInput.value);
  });

  // Roadmap click
  $('#roadmapTimeline').addEventListener('click', function(e) { var el = e.target.closest('.roadmap-item'); if (el) showWeek(+el.dataset.week); });

  // Search
  searchInput.addEventListener('input', function() { handleSearch(searchInput.value); });

  // Keyboard shortcuts (Feature 5)
  document.addEventListener('keydown', handleKeyboard);
  $('#kbShortcutsBtn').addEventListener('click', function() { $('#kbModal').classList.toggle('show'); });
  $('#kbModalClose').addEventListener('click', function() { $('#kbModal').classList.remove('show'); });
  $('#kbModal').addEventListener('click', function(e) { if (e.target === this) this.classList.remove('show'); });

  // Mobile sidebar
  $('#sidebarToggle').addEventListener('click', function() {
    sidebar.classList.toggle('open');
    var ov = $('.sidebar-overlay');
    if (!ov) {
      ov = document.createElement('div');
      ov.className = 'sidebar-overlay';
      document.body.appendChild(ov);
      ov.addEventListener('click', function() { sidebar.classList.remove('open'); ov.classList.remove('show'); });
    }
    ov.classList.toggle('show');
  });
}

// ---- INIT ----
function init() {
  applyTheme();
  applyFontScale();
  renderSidebar();
  renderRoadmap();
  renderResources();
  updateGlobalProgress();
  injectCopyButtons();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', init);
