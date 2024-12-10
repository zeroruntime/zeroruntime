import subprocess

def run_tailwind_watch():
    """
    Runs TailwindCSS in watch mode for automatic recompilation.
    """
    command = [
        'tailwindcss',  # Make sure that this points to your tailwindcss file in your project.
        '-i', './runtimeapp/static/css/input.css',  # input
        '-o', './runtimeapp/static/css/output.css',  # output
        '--watch'
    ]
    # Run the Tailwind watcher in the background
    subprocess.Popen(command)
    print('TailwindCSS watcher started.')
